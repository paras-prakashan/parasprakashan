import React from 'react'
import './Hero.css'

import FirstSlide from './FirstSlide'

const renderIndicators = slides => slides.map((x, i) => {
	return <li key={'indicator' + i} data-target="#heroCarouselIndicators" data-slide-to={i+1}></li>
})

const renderTableRow = book => {
	return (
		<tr key={book.index}>
			<th scope="row">{book.index}</th>
			<td>{book.title}</td>
			<td>{book.part}</td>
			<td>{book.price}</td>
		</tr>
	)
}

const renderCarouselItems = slides => slides.map((x, i) => {
	let table = x.tableData.map((book, bookIndex) => {
		book.index = bookIndex + 1
		return renderTableRow(book)
	})

	return (
		<div className={"carousel-item"} key={i}>
			<div className="hero-slide row" style={{ "backgroundImage": "url('./assets/images/bg_textures/" + (i + 1) + "-min.png')" }}>
				<div className="hero-image col-lg-6">
					<img className="d-block img-fluid" src={"./assets/images/stacked/" + x.image + ".png"} alt={x.title} />
				</div>
				<div className="text-center col-lg-6 hero-text-section">
					<div className="d-none d-none d-lg-block pr-12">
						<h2 className="display-4 pt-5">{x.title}</h2>
						<h3 className="display-5">{x.subTitle}</h3>
						<div className="pt-5 text-left table-section">
							<table className="table">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Title</th>
										<th scope="col">Part</th>
										<th scope="col">Price</th>
									</tr>
								</thead>
								<tbody>
									{table}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

const Hero = (props) => {

	const {books, labManuals} = props;
	const allBooks = labManuals.concat(books);

	return (
			<div className="hero d-none d-md-block d-lg-block d-xl-block">
				<div id="heroCarouselIndicators" className="carousel slide shadow" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#heroCarouselIndicators" data-slide-to="0" className="active"></li>
						{renderIndicators(allBooks)}
					</ol>
					<div className="carousel-inner">
						<FirstSlide books={books} labManuals={labManuals} />
						{renderCarouselItems(allBooks)}
					</div>
					<a className="carousel-control-prev" href="#heroCarouselIndicators" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#heroCarouselIndicators" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
	)
}

export default Hero