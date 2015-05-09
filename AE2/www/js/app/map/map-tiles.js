/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global console, alert, window, document */
	/*global */

	win.APP.mapTiles = {

		// main
		'bridge-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEXAeEyWZFrSjkRLQTmsblN9Sh1TGeRHAAAAVklEQVR4Aa2RSwqAUAwDE196/ysrklVJXDkwtDh+hIdTwFXogQVMASQnCUm0Y98dD7TjKU8vvpjCrJvA8IRSoIUs06u0TYHf34i/ugJ3mBhY+PNoT+EGXu4DQ2cCGDoAAAAASUVORK5CYII=',
		'bridge-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEXAeEzSjkSWZFp9Sh1LQTmsblOEQcKrAAAARklEQVR42rXPMQ4AIQwDQWLj/38Zo/NJ1Ihs4SbFKGNWEeNMYNW8PBA7KcMcnhoOcth1GRAi0EKTYeIPXYbTN0baDClQ/ljuKQN6TFmLxAAAAABJRU5ErkJggg==',
		'forest-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEX09OZ8xiNLuOsAqDcAWYIBVVcAcHGT1OAAg397jtO+czJCVZkAf5y4mRybAAAAjElEQVR42n2PSxKDMAxDwb+40Puft3ZcoywALaWR3mh7l9mDz7s9+PttIhnone/MHgl4KKACnshM3BW8f4FFvh4V8DqYW6xm4NVWJqq5vvIGnXIcetb6wiOiT4hqHbxoTPV68SLoqNeLt7UG3iSPxhXgTfKIrgBvKIUG9ZvVxptah/AG62iU0EAE+1U/3CYEh+g3Tw8AAAAASUVORK5CYII=',
		'forest-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEX09OZ8xiNLuOsAqDcAWYIBVVcAcHGT1OAAg397jtNCVZm+czIAf5wEVV2SAAAAb0lEQVR42o2OWwrAIAwEax4mtb3/eatSCKwRnJ/ALhvmOqbWTc6lbvKSNjIKzXJn9qLpIJuIzMZdlwGLvN4nYN+L+YsV7UVGo4r2Rk2eRxsZ2BPR3ekH7I1+bLG3iM/sA7QP0D4A+wDtA7APwv6MD3onA0PJgvpTAAAAAElFTkSuQmCC',
		'hill-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAD1BMVEX09OaT1OA2qtF7jtNCVZltgelBAAAAR0lEQVR4Ac2PsQqAUAwDc+n7/28W3qBim8FB8IYQekOo/o3tKjVgZ1OcxWgG3hoYDbhquu9cVmARfw0G7qN+LF2VsJkN+ooDYH4AUzZs6V0AAAAASUVORK5CYII=',
		'road-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAADFBMVEXCij15TFOca2Cvek/vzfTLAAAAUklEQVR42o1PQQ4AIAgy+v+fa+OADZtysUGCxP4gCUAiOC+j8QiFoVOgaZTBymisTNCSHrOC/QbPff+EbWCBfsPm8ObCvEeUAqPggvn3zWv8hQOnUAaMq7ZOUwAAAABJRU5ErkJggg==',
		'stone-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAGFBMVEX09OaT1OCru/N7jtPC1/dCVZk2qtEuNUIzhb8aAAAApklEQVR4AZ2OgWpEIQwEZ3eT3P//cZ8Eihx3FDog6AxG+ZuZJJ88D8pnD/3Fo/eSL2VALC9u+neYcpeOCA+adPoa5DhQk7F0B7wnC1R9f7WFjPd9b2hExTLCsp5QPChCE09EfMhekRnShlEn9lkFkmY6LWDSaaOcgIRygpx0V6pqQzn9iiSTThy7TqBKdiy79GqrHuBwtj4xneNZv+lUeYe8UQv/5gfc+QLan8+rhgAAAABJRU5ErkJggg==',
		'stone-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAIVBMVEUuNUI2qtFCVZl7jtOIABWT1OCru/PC1/ftHCT09Ob/fydclyL/AAAAxUlEQVR4AXXRQW7FQAgD0Awegz33P3BBkdo07feCBU9mw+UP+QFN/oG1j/bGH1j23lvxhuUjH5vxApzjhnMYT5gC5bFz/YI4Zw206HpAgMYAFwLxDcuplNUtJfkESXPfzWbFDbO3guek05pd3hDqICXTPdlQA4SshVyikalMdGVAXkJkKwOQ0Fy+SK4BenqBkIkBk+bATEQUquqGSsQFkmoHci4NuIqZyB7iFcnqeMCc8iACs3f5hqHRtjny/nnd8Rve+Qhf5qgQfg3bMNUAAAAASUVORK5CYII=',
		'terra-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAA1BMVEX09OYsDoUiAAAAC0lEQVQIHWOgMQAAAGAAAfrd2uIAAAAASUVORK5CYII=',
		'terra-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAD1BMVEX29t7D49mR0dQ1qMZAU5ddagrgAAAAYElEQVR4AdXPMW7DUAwE0Zld3v/MKRLGX7AMqPVUBB62IO/ZpL2DgNl78wIa+S2gOYAF4RH0BR6AOQTNAqTTA7ILK8wfYBf+V1CBadlMMNMIOMM1dR99XCp3BT4IqnxdP3U6AOlAf220AAAAAElFTkSuQmCC',
		'terra-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEWR0dQ1qMb29t5AU5d3ibjD49lInfDAAAAAvklEQVR4AYXPUYorYQhE4TqWtf8tX7VvaDLzMEKQnA9+aVmqblOqGRXuLsliAfwBw0K/wAJ/Agd3oxf6brwgpnlmFL3AgUAHfEE/0L/AWpB/gMtVSc3yQcsH2Ca59QXmA1gvNNi68f8PtCweoWb0dC6z4gRJ+DqbpR5xuu/F7S2h6MTdVftj+0KtmGlJdQLePlCpke0jZHuBFjRCNBNjrueeosR1Eu5PSvXIQhxtnKmFmoUB605vfmANIM/WwT93YgP9d55xyQAAAABJRU5ErkJggg==',
		'terra-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEX29t6R0dTD49k1qMZ3ibhAU5fSFAssAAAAYklEQVR4Aa2M0QoCMAwDL8n2/78sSN3QrYLgvYzskjISRzFg2SwkAqrwLhC+ijXwIV7ZV+F6t6gcw0UkOsUY+1vRFtFqP1OJan8yp8wNmZ/pVyLmK1aS9mJ01IEyHY2x+C8PMGgAxB7LN1oAAAAASUVORK5CYII=',
		'terra-5': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAElBMVEX29t6R0dQ1qMZAU5fD49l3ibjnniWjAAAAv0lEQVQYV0XJsXLCMBAA0dVheumE+jssemRCbyvjHgH//y0pmCHbvVkAUOe/xxFCAoJzfBwfRAGU+R3DvrADY51Xk2mZCrCfHBN0ewO9+eS6aq5Az6Ytu7QKMueFUZjbYgiXFkaJ+Ykh9BGfl1AqxoF+nm639Vy5cqDPEcJSucK1vwDu9QD8Dg0pRS8/QG/ZQFquwH5fAObXEyZ366etipYIyc1ARDXC5hbVg2iyD+CDzb/nTUnfM8hpmIOKpvYHDvwbD2PPXe0AAAAASUVORK5CYII=',
		'water-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAA1BMVEUhVNNf+AozAAAAC0lEQVQIHWOgMQAAAGAAAfrd2uIAAAAASUVORK5CYII=',
		'water-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUhVNMFkf8ysPhgz/DN4+eD/UgYAAAAIklEQVQY02NgIA8IIJiMys6K2GWwAEZktrIiDhk6OohMAAAU1AGYuS2vKAAAAABJRU5ErkJggg==',
		'water-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUhVNMFkf9gz/AysPjN4+dmthq+AAAAJElEQVQY02NgoBwwKpKgFokprKIsiFWGHCCAxBZWFsAhQzUAAJi4APfDllgeAAAAAElFTkSuQmCC',

		// angles
			// road
		'a-road-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2A2qtGvek+T1OB5TFP09OZtbMsPAAAAOUlEQVR42oWLQQ4AMAjCELb/f3miidttPRgaEPvhI1Lfaa6EFElJpmXgh84AauxIsmfOwAiNRZGFOb1RAii+KOSbAAAAAElFTkSuQmCC',
		'a-road-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAAR0lEQVR42n3JAQ7AIAgDwM52/f+TxyBkiTovgaLF/eNcXK88vgvxGEPSSAqVyE1SE8Sw2Y5dP/AGAzJi3NAxocgq9s4F6QUf3ckFVUPR+LwAAAAASUVORK5CYII=',
		'a-road-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2A2qtGvek+T1OB5TFP09OZtbMsPAAAAOUlEQVR42n3LQQ4AIAgDwULl/1+2BRM9uRcyIUU9fUD6kBcnhCJjsJzcAEaeITNNTwXAYjXcC73C2rqEAiguDjzDAAAAAElFTkSuQmCC',
		'a-road-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAAVklEQVR42m3PUQ7AIAgDULFl9z/y6MQ1JvLVF4KNIzNI4NEUsgEI0xtBMioshABigQqaC4rG8GZSqUsFl/bFRglEww9o46cV7zhvvsr/Py6NEmB4kxsvJPUFN3MPk0cAAAAASUVORK5CYII=',
		'a-road-6': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAAVklEQVR42m2NQQ7AQAgCdUH//+SGjZakqScn4BitIXmy6kKAzBpoGADV3qT3ZnuTBATHiXoCGaSzem27OzFEMxfg2h0yDTAAGDVG56cGJx8BEM1j9R88LdIFNNwHUCkAAAAASUVORK5CYII=',
		'a-road-7': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEWca2DCij02qtF5TFOT1OCvek/09OYbOmi9AAAAPElEQVR4AV3MUQ6AMAjGYITa+x9ZSTYl4+3L3xAq1HX3NTSrYmAsfEgk62WEKHS5s/VkA4QF7PuzCTiWB9ZnAuarfOb5AAAAAElFTkSuQmCC',
		'a-road-8': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAARklEQVR42oWMQQrAQAgDY4z9/5Or7uKp0gFhyIB4FjCyBPe88bT91X/wYlSQdAcVVVtA8pjTSA2wJKNZJK3sCfGNIRbW8AJs4QVz0+c5fAAAAABJRU5ErkJggg==',
		'a-road-9': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEWca2DCij02qtF5TFOT1OCvek/09OYbOmi9AAAAO0lEQVR4AVXLUQ6AMAgEUSzj3P/IQoi1zt9LduPurgS1EZlLB9UfDEq1QlZhNqC4z12A8MKOE27Ah6MH1LgC5rwdaAUAAAAASUVORK5CYII=',
		'a-road-1-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC82qtGT1OD09OZ5TFOca2Cvek+e1/vUAAAANUlEQVR42m3KMQ4AMAgCQEHp/5/cEmMnWfCCkZms0/mQQRKGFQDi46U0b3Jmcfe9QyppWVZc1SIC7yU/hSsAAAAASUVORK5CYII=',
		'a-road-3-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC82qtGT1OD09OZ5TFOca2Cvek+e1/vUAAAAOElEQVR42l3J0QoAIAhDUbWt///kpmRC92FwmO0KvtQFPWKABxKAvkTZDEj0SWFKcEClmYf9dD8O17QC81nzBtQAAAAASUVORK5CYII=',
		'a-road-7-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEU2qtGT1OB5TFP09Oaca2Cvek+whiSvAAAANElEQVR4AXXLwQ0AMAhCURTcf+VqQ3vzJx5eDCinvoFluAXaoAtNFrL7CAbybUjGoAzCnwPQ4QKHOyQTRAAAAABJRU5ErkJggg==',
		'a-road-9-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEV5TFM2qtGT1OD09Oaca2Cvek/jHXq9AAAAMUlEQVR42pXKQQoAMAwCQU3M/7/cBEqwxy5eBkRZkKM+IIPemyYsIsiBepHdBRYdODjTIgKFi9rjBwAAAABJRU5ErkJggg==',
		
			// water
		'a-water-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAHlBMVEV7jtMZP54hVNNUKC8QdtsAl+J5TFOca2BLuOv09OZIZy18AAAASklEQVQI1yWMwREAMQgCjXpC+m/4kPBAVgfjWkEZY40xJYOAAKZkCzWCmQfemha2YMXlQPNbxVacu1uXAh0z/cCQ5/gBXxYQD6QfJ/QDdkduTmoAAAAASUVORK5CYII=',
		'a-water-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAHlBMVEVUKC97jtP09OYQdtsAl+J5TFNLuOuca2AZP54hVNOngmFhAAAAUElEQVR42nWJQRLAMAgC0Uas//9wqU16cw/LADB3+gf5yryNMAJaGJlp5DvICdWIZRbQIzriHC35hAz5L1tdwAGsAVwDqAHcAyippEPtQA08T1EGqx/qCJEAAAAASUVORK5CYII=',
		'a-water-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAHlBMVEV7jtMZP54hVNNUKC8QdtsAl+J5TFOca2BLuOv09OZIZy18AAAASklEQVR42iXLQQ4AMQhCUVsdxPtfeJD+hckLMTgzjHHRQSZ0DJXQ4QMgIA0AXgW+EotvkxqcqCprn+KWyU4t51wjMQuLWFxlNOcHI70DeNCX4ZIAAAAASUVORK5CYII=',
		'a-water-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAG1BMVEV7jtNUKC+ca2AAl+J5TFP09OZLuOsQdtshVNMYBHqyAAAAPklEQVR4AZ3OMQ6AAAxC0VIp9f4n1k0GSYxsbyG/hG4du+e9GtAg8sF8gxjfYBgiHbQhtxX5I9RzIsog9DsuAE4Gk8q2wRQAAAAASUVORK5CYII=',
		'a-water-6': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAG1BMVEV7jtNUKC+ca2AAl+J5TFP09OZLuOsQdtshVNMYBHqyAAAAQklEQVR4AZXOMRKAQAxC0YAJ6/1PrJVLisy4dK9hftzv1rpEQhuJ+pApR/0BUw4YoA3Mb/QDoqa2OA5lh0ZEK1DDAwz4BpMQMLaeAAAAAElFTkSuQmCC',
		'a-water-7': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAG1BMVEWT1OCca2B5TFP09OYAl+JUKC8hVNMQdttLuOtd57RmAAAAQElEQVR4AWXHQRKAMAwCQEjE8P8XS3tpZ9zbwlT5mXkD1pUu6YR1xVW/zEkWaErJWiJp1gLW3gZ4l6SEztq9+APt4AL8MBy1ggAAAABJRU5ErkJggg==',
		'a-water-8': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAFVBMVEWca2D09OZUKC8Al+JLuOsQdtshVNNUHAE3AAAALUlEQVR4AWNgwwEGVoIVB8AtwYwDMLDgAAxMQMDAAKSACJkJ1MEIBCCSBYUJAKV1BVU7rdexAAAAAElFTkSuQmCC',
		'a-water-9': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAG1BMVEWT1OCca2B5TFP09OYAl+JUKC8hVNMQdttLuOtd57RmAAAAQklEQVR4AU3HuwFDMQjFUD5WuPtPHEzxsCod+3VVR4HrAQuIXIQvIjSoD339D04DPO1MKiBNt3lk4O6zMlPelP35B/A7Avyx5tKDAAAAAElFTkSuQmCC',
		'a-water-1-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC+ca2BLuOt5TFMAl+IQdtshVNOCBgE9AAAAM0lEQVR4AX3HuRUAIBACUdyD/ksWA95q4kTzEciM6qbCeiBd0Bs5T8R5o+YJnX5AB88fG8R6As5VmRW8AAAAAElFTkSuQmCC',
		'a-water-3-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC+ca2BLuOt5TFMAl+IQdtshVNOCBgE9AAAAMUlEQVR4AXXHyQ0AIAhFQRaw/5L9IS/qxbmNLemuyLR44zfmJxphSWYxYaUwmVCCfzbILQLOSttGLAAAAABJRU5ErkJggg==',
		'a-water-7-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2BUKC9LuOsAl+IQdtshVNNLsAMwAAAAKklEQVR4AWNgRQKUc1hYWJA5CC4DMzOCx8DEBOZCOIyMQB6cw8DABJMCANQsAo26LsDCAAAAAElFTkSuQmCC',
		'a-water-9-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2BUKC9LuOsAl+IQdtshVNNLsAMwAAAAKElEQVQIW2NkZUAARupx/iM4/5FkQOz/UM5/EEJwgBDKAUn8/8fACACdqg86uLhn0wAAAABJRU5ErkJggg=='

	};

}(window));
