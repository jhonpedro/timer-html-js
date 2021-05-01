;((window, document) => {
	'use strict'

	var $input = document.querySelector('[data-js="input"]')

	var $startButton = document.querySelector('[data-js="button-start"]')
	var $stopButton = document.querySelector('[data-js="button-stop"]')
	var $resetButton = document.querySelector('[data-js="button-reset"]')

	var timer

	$startButton.addEventListener('click', () => {
		timer = setInterval(() => {
			// Here is [days, hours, minutes, seconds]
			var timesArr = $input.value.split(':')

			// convert everything to integer
			timesArr[0] = +timesArr[0]
			timesArr[1] = +timesArr[1]
			timesArr[2] = +timesArr[2]
			timesArr[3] = +timesArr[3]

			timesArr[3] += 1

			if (timesArr[3] >= 60) {
				timesArr[2]++
				timesArr[3] = '0'
			}
			if (timesArr[2] >= 60) {
				timesArr[1]++
				timesArr[2] = '0'
			}
			if (timesArr[1] >= 24) {
				timesArr[0]++
				timesArr[1] = '0'
			}

			var daysFormated = +timesArr[0] >= 10 ? timesArr[0] : `0${timesArr[0]}`
			var hoursFormated = +timesArr[1] >= 10 ? timesArr[1] : `0${timesArr[1]}`
			var minutesFormated = +timesArr[2] >= 10 ? timesArr[2] : `0${timesArr[2]}`
			var secondsFormated = +timesArr[3] >= 10 ? timesArr[3] : `0${timesArr[3]}`

			$input.value = `${daysFormated}:${hoursFormated}:${minutesFormated}:${secondsFormated}`
		}, 1000)
	})

	$stopButton.addEventListener('click', () => {
		if (!timer) {
			return
		}

		clearInterval(timer)
	})

	$resetButton.addEventListener('click', () => {
		if (timer) {
			clearInterval(timer)
		}

		$input.value = '00:00:00:00'
	})
})(window, document)
