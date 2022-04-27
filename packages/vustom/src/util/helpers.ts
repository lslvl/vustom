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
  var pref_x = args.pref_x || 'center' // default position
  var pref_y = args.pref_y || 'bottom' // default position

  var overflow = false

  var activatorInfo = activator.getBoundingClientRect()
  var elementInfo = element.getBoundingClientRect()

  var left = 0
  var top = 0

  var arrowX, arrowY = ''

  // viewport width / height
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  var offsets = {
    x: {
      left: activatorInfo.left,
      right: vw - (activatorInfo.left + activatorInfo.width),
    },
    y: {
      top: activatorInfo.top - gap,
      bottom: vh - (activatorInfo.top + activatorInfo.height)
    }
  }

  // offsets sorted by highest value
  let sortedX = Object.entries(offsets.x).sort((a, b) => b[1] - a[1])
  let sortedY = Object.entries(offsets.y).sort((a, b) => b[1] - a[1])

  var pos_x, pos_y = ''

  // check if pref coord is
  if(offsets.x[pref_x] > elementInfo.width) {
    pos_x = pref_x
  } else {
    if(pref_x == 'center' && (elementInfo.width / 2) < offsets.x['left'] && (elementInfo.width / 2) < offsets.x['right']) {
      pos_x = 'center'
    } else {
      pos_x = sortedX[0][0]
    }
  }

  if(offsets.y[pref_y] > elementInfo.height) {
    pos_y = pref_y
  } else {
    if(pref_y == 'center' && (elementInfo.height / 2) < offsets.y['top'] && (elementInfo.height / 2) < offsets.y['bottom']) {
      pos_y = 'center'
    } else {
      pos_y = sortedY[0][0]
    }
  }

  // set the position left and top values
  switch (pos_x) {
    case 'right':
      left = activatorInfo.left + gap
      arrowX = 'left'
    break;
    case 'left':
      left = vw - elementInfo.width - gap
      left = activatorInfo.left + activatorInfo.width - elementInfo.width - gap
      arrowX = 'right'
    break;
    case 'center':
      left = activatorInfo.left + activatorInfo.width / 2 - elementInfo.width / 2
      arrowX = 'center'
    break;
  }

  switch (pos_y) {
    case 'top':
      top = activatorInfo.top - elementInfo.height - gap
      arrowY = 'bottom'
    break;
    case 'bottom':
      top = activatorInfo.top + activatorInfo.height + gap
      arrowY = 'top'
    break;
    case 'center':
      top = activatorInfo.top - (activatorInfo.height / 2) + (elementInfo.height / 2)
      arrowY = 'center'
    break;
  }

  // max height of element to prevent element from overidding viewport
  var maxWidth = vw - (left + viewportGap)
  var maxHeight = vh - (top + viewportGap)

  return {
    top, left, arrowX, arrowY, maxHeight
  }

}
