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
			var [days, hours, minutes, seconds] = $input.value.split(':')

			// convert everything to integer
			days = +days
			hours = +hours
			minutes = +minutes
			seconds = +seconds

			seconds += 1

			if (seconds >= 60) {
				minutes += parseInt(seconds / 60)
				seconds = parseInt(seconds % 60)
			}
			if (minutes >= 60) {
				hours += parseInt(minutes / 60)
				seconds = parseInt(minutes % 60)
			}
			if (hours >= 24) {
				days += parseInt(hours / 24)
				seconds = parseInt(hours % 60)
			}

			$input.value = `${days >= 10 ? days : `0${days}`}:${
				hours >= 10 ? hours : `0${hours}`
			}:${minutes >= 10 ? minutes : `0${minutes}`}:${
				seconds >= 10 ? seconds : `0${seconds}`
			}`
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
