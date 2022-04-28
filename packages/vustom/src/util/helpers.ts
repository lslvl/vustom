export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16,
})

export class Timer {

  private callback: () => void
  private id;
  private event;
  private remaining: boolean;
  private started!: number;

  constructor(callback: () => void, delay: number, id) {
    this.callback = callback
    this.id = ((i) => () => i++)(0)
    this.delay = delay;
    this.running = false
    this.started = null
  }

  start():void {
    this.remaining = this.delay
    this.running = true
    this.started = new Date()
    this.startedMS = new Date().getTime()
    this.id = window.setTimeout(this.callback, this.remaining)
  }

  pause():void {
    this.running = false
    window.clearTimeout(this.id)
    this.remaining -= new Date() - this.started
  }

  resume(): void {
    this.started = new Date()
    this.startedMS = this.started.getTime()
    window.clearTimeout(this.id);
    this.id = window.setTimeout(this.callback, this.remaining);
  }

  stop(): void {
    this.running = false
    window.clearTimeout(this.id)
    window.clearTimeout(this.event)
    this.id = null
    this.event = null
  }
}

// activator should not have a fixed position
export var keepInViewer = (activator, element, args = {}) => {

  var gap = args.gap || 0 // gap between activator and element
  var viewportGap = args.viewportGap || 20 // gap between viewport and element
  var position = args.position || 'bottom right' // default position

  var pref = position.split(' ') // ['left'], ['top', 'left']
  var axis, counterAxis

  if(pref[0] == 'left' || pref[0] == 'right') {
    var axis = 'x'
    var counterAxis = 'y'
  }
  if(pref[0] == 'top' || pref[0] == 'bottom') {
    var axis = 'y'
    var counterAxis = 'x'
  }

  var main, second = ''

  if(pref.length == 1) {
    main = pref[0]
    second = 'center'
  } else {
    main = pref[0]
    second = pref[1]
  }

  // not used yet : force overflow if element can't be displayed with a tiny viewport
  var overflow = false

  var activatorInfo = activator.getBoundingClientRect()
  var elementInfo = element.getBoundingClientRect()

  var left = 0
  var top = 0

  var arrowX, arrowY = ''

  // viewport width / height
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  // calcul offsets
  var offsets = {
    top: activatorInfo.top - gap,
    right: vw - (activatorInfo.left + activatorInfo.width),
    bottom: vh - (activatorInfo.top + activatorInfo.height),
    left: activatorInfo.left
  }

  // offsets sorted by highest value
  let sorted = {
    x: Object.entries({ left: offsets.left, right: offsets.right }).sort((a, b) => b[1] - a[1]),
    y: Object.entries({ top: offsets.top, bottom: offsets.bottom }).sort((a, b) => b[1] - a[1])
  }

  // change direction if element can't be displayed
  main = offsets[main] >= (elementInfo[getDim(main)] + gap) ? main : sorted[axis][0][0]

  if(second == 'center' && axis == 'x') {
    var half = elementInfo.height / 2
    if(offsets.top >= half && offsets.bottom >= half) {
      second = 'center'
    } else {
      second = offsets[second] >= (elementInfo[getDim(second)] + gap) ? second : sorted[counterAxis][0][0]
    }
  }

  if(second == 'center' && axis == 'y') {
    var half = elementInfo.width / 2
    if(offsets.left >= half && offsets.right >= half) {
      second = 'center'
    } else {
      second = offsets[second] >= (elementInfo[getDim(second)] + gap) ? second : sorted[counterAxis][0][0]
    }
  }

  // get dimension property based on direction, ex: left => width, top => height
  function getDim(pos) {
      return (pos == 'left' || pos == 'right') ? 'width' : (pos == 'top' || pos == 'bottom') ? 'height' : ''
  }

  main += '_'+axis
  second += '_'+axis

  // set top and left values based on corrected directions
  setCoords(main)
  setCoords(second)



  function setCoords(pos) {

    switch (pos) {
      case 'right_x':
        left = activatorInfo.left + activatorInfo.width + gap
        arrowX = 'left'
      break;
      case 'right_y':
        left = activatorInfo.left + gap
        arrowX = 'left'
      break;
      case 'left_x':
        left = activatorInfo.left - elementInfo.width - gap
        arrowX = 'right'
      break;
      case 'left_y':
        left = activatorInfo.left + activatorInfo.width - elementInfo.width - gap
        arrowX = 'right'
      break;
      case 'center_x':
        top = activatorInfo.top + activatorInfo.height / 2 - elementInfo.height / 2
        arrowY = 'center_y'
      break;
      case 'center_y':
        left = activatorInfo.left + activatorInfo.width / 2 - elementInfo.width / 2
        arrowX = 'center'
      break;
      case 'top_x':
        top = activatorInfo.top + activatorInfo.height - elementInfo.height - gap
        arrowY = 'bottom'
      break;
      case 'top_y':
        top = activatorInfo.top - elementInfo.height - gap
        arrowY = 'bottom'
      break;
      case 'bottom_x':
        top = activatorInfo.top + gap
        arrowY = 'top'
      break;
      case 'bottom_y':
        top = activatorInfo.top + activatorInfo.height + gap
        arrowY = 'top'
      break;
    }
  }

  // max height of element to prevent element from overidding viewport
  var maxWidth = vw - (left + viewportGap)
  var maxHeight = vh - (top + viewportGap)

  console.log(arrowX, arrowY);

  return {
    top, left, arrowX, arrowY, maxHeight
  }

}
