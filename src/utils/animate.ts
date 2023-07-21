
export function animate({timing, getX, getY, duration}) {
  let start = performance.now()

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    // вычисление текущего состояния анимации
    let value = timing(timeFraction)

    getX(timeFraction) // получение X функции анимации
    getY(value) // получение Y функции анимации

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }

  });
}
