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

export var keepInViewer = (activator, element, args = {}) => {

  var gap = args.gap || 0

  var activatorInfo = activator.getBoundingClientRect()
  var elementInfo = element.getBoundingClientRect()

  var left = 0
  var top = 0

  var arrowX = 'center'
  var arrowY = 'bottom'

  var pos_x = 'center' // left | center | right
  var pos_y = '' // top | middle | bottom

  var offsetLeft = activatorInfo.left - (elementInfo.width + gap)
  var offsetRight =
    window.innerWidth - (activatorInfo.left + activatorInfo.width + elementInfo.width + gap)
  // set the position left and top values
  // naturally force center if possible
  pos_x = offsetLeft < 0 ? 'left' : offsetRight < 0 ? 'right' : 'center'

  var offsetTop = activatorInfo.top - (elementInfo.height + gap)
  var offsetBottom =
    window.innerHeight - (activatorInfo.top + activatorInfo.height + elementInfo.height + gap)
  // naturally force top if possible
  pos_y = offsetTop < 0 ? 'bottom' : offsetBottom < 0 ? 'top' : 'top'

  switch (pos_x) {
    case 'left': left = activatorInfo.left + gap
    arrowX = 'left'
    break;
    case 'right': left = activatorInfo.left + activatorInfo.width - elementInfo.width - gap
    arrowX = 'right'
    break;
    case 'center': left = activatorInfo.left + activatorInfo.width / 2 - elementInfo.width / 2
    arrowX = 'center'
    break;
  }

  switch (pos_y) {
    case 'top': top = activatorInfo.top - elementInfo.height - gap
    arrowY = 'bottom'
    break;
    case 'bottom': top = activatorInfo.top + activatorInfo.height + gap
    arrowY = 'top'
    break;
    case 'middle': top = activatorInfo.top - (activatorInfo.height / 2) + (elementInfo.height / 2)
    arrowY = 'middle'
    break;
  }

  return {
    top, left, arrowX, arrowY
  }

}
