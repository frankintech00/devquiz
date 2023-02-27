// Import the React library
import React from 'react';

// Define a functional component called Loading using an arrow function
export const Loading = () => {
	return (
		// Render a div element that centers the SVG element vertically and horizontally
		<div className='flex items-center justify-center h-screen'>
			{/* Render an SVG element with dimensions of 90x90 */}
			<svg
				width='90'
				height='90'
				viewBox='0 0 90 90'
				xmlns='http://www.w3.org/2000/svg'
				stroke='#fff'
			>
				{/* Render a group element with no fill and stroke with a width of 2 */}
				<g
					fill='none'
					fillRule='evenodd'
					transform='translate(1 1)'
					strokeWidth='2'
				>
					{/* Render a circle element with a center at (22, 22) and a radius of 6 */}
					<circle cx='22' cy='22' r='6' strokeOpacity='0'>
						{/* Animate the radius of the circle from 6 to 22 over a duration of 3 seconds, and repeat indefinitely */}
						<animate
							attributeName='r'
							begin='1.5s'
							dur='3s'
							values='6;22'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						{/* Animate the opacity of the circle's stroke from 1 to 0 over a duration of 3 seconds, and repeat indefinitely */}
						<animate
							attributeName='stroke-opacity'
							begin='1.5s'
							dur='3s'
							values='1;0'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						{/* Animate the stroke width of the circle from 2 to 0 over a duration of 3 seconds, and repeat indefinitely */}
						<animate
							attributeName='stroke-width'
							begin='1.5s'
							dur='3s'
							values='2;0'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
					{/* Render a second circle element with a center at (22, 22) and a radius of 6 */}
					<circle cx='22' cy='22' r='6' strokeOpacity='0'>
						{/* Animate the radius of the circle from 6 to 22 over a duration of 3 seconds, and repeat indefinitely */}
						<animate
							attributeName='r'
							begin='3s'
							dur='3s'
							values='6;22'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						{/* Animate the opacity of the circle's stroke from 1 to 0 over a duration of 3 seconds, and repeat indefinitely */}
						<animate
							attributeName='stroke-opacity'
							begin='3s'
							dur='3s'
							values='1;0'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						{/* Animate the stroke width of the circle from 2 to 0 over a duration of 3 seconds, and repeat indefinitely */}
						<animate
							attributeName='stroke-width'
							begin='3s'
							dur='3s'
							values='2;0'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
					{/* Render a third circle element with a center at (22, 22) and a radius of 8 */}
					<circle cx='22' cy='22' r='8'>
						{/* Animate the radius of the circle from 6 to 1 to 2 to 3 to 4 to 5 to 6 over a duration of 1.5 seconds, and repeat indefinitely */}
						<animate
							attributeName='r'
							begin='0s'
							dur='1.5s'
							values='6;1;2;3;4;5;6'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
				</g>
			</svg>
		</div>
	);
};
