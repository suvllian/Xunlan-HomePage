import React, {Component} from 'react';
import './../../style/friend.scss';

const friendItems = [
	{title: "长安大学官网", src: "http://www.chd.edu.cn/"},
	{title: "长安大学信息门户", src: "http://ids.chd.edu.cn/authserver/login?service=http%3A%2F%2Fportal.chd.edu.cn%2F"},
	{title: "长安大学先锋家园", src: "http://xfjy.chd.edu.cn/"},
	{title: "长安大学图书馆", src: "http://lib.chd.edu.cn/"},
	{title: "长安大学教学管理信息系统", src: "http://cmis.chd.edu.cn/"},
]

export default class Footer extends Component {
	render() {
		return (
			<section className="friend">
				<div className="container">
					<div className="section-title-1 text-center">	
						<h2>友情链接</h2>
					</div>
					<div className="friend-items">
						{
							friendItems.map((item, index) => 
								<div className="friend-item" key={index}>
									<a href={item.src} target="_blank">{item.title}</a>
								</div>
							)
						}
					</div>
				</div>
			</section>
		)
	}

}