import React, {Component} from 'react';

import Background1 from './../../assets/home-1.jpg';
import Background2 from './../../assets/home-2.jpg';
import Background3 from './../../assets/home-1.jpg';
import Background4 from './../../assets/home-2.jpg';
import Background5 from './../../assets/home-3.jpg';

export default class Top extends Component {
	constructor(props) {
		super(props);

		this.state = {
			liLength: 5,
			currentItem: 1
		}
	}

	render() {
		return (
			<section className="slider">	
				<ul className="slider-items">
					<li className="slider-item slider-active">
						<img src={ Background1 } />
					</li>
					<li className="slider-item">
						<img src={ Background2 } />
					</li>
					<li className="slider-item">
						<img src={ Background3 } />
					</li>
					<li className="slider-item">
						<img src={ Background4 } />
					</li>
					<li className="slider-item">
						<img src={ Background5 } />
					</li>			
				</ul>
			</section>
		)
	}

	nextImage() {
		let now = this.state.currentItem;
		let next = 0;
		if (now == this.state.liLength) {
			next = 1;
		} else {
			next = now + 1;
		}
		return next;
	}

	resetSlider() {
		this.slider.forEach((item, index) => {
			item.className = "slider-item";
		});
	}

	slideImage() {
		let index = this.nextImage();
		this.setState({ currentItem: index });
		this.resetSlider();
		this.slider[index-1].className = "slider-item slider-active";
	}

	componentDidMount() {
		this.slider = document.querySelectorAll(".slider-item");
		let slideImage = this.slideImage.bind(this);
		this.handle = setInterval(slideImage, 4000);
	}	
}