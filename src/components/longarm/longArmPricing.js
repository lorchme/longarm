import React from 'react';

//import { Link } from 'react-router-dom';

const LongArmPricing = () => {
  return (
    <div>
	    <section className="container-fluid">
		    <div className="container text-center">
		    <h1>LONGARM QUILTING SERVICES</h1>
				<p>Let us finish your quilt top with a delicious texture!  Our machine quilting services are available by mail.  Send us your quilt top and backing.  We&rsquo;ll quilt your special project in our home studio, giving it all the love and attention to detail that is my standard.  You&rsquo;ll receive it back soon, beautifully presented and ready to be bound. </p>
				<h5>THANK YOU FOR USING JENNY M&rsquo;S QUILTING CO.!</h5>
		    </div>
	    </section> {/* end section header */}
	    
	    <div className="container mt-5 pb-5">
			<ul className="nav nav-tabs nav-justified serviceHeader">
			    <li className="nav-item">
			        <a className="nav-link active serviceHeader" data-toggle="tab" href="#panel1" role="tab">Timing</a>
			    </li>
			    <li className="nav-item">
			        <a className="nav-link serviceHeader" data-toggle="tab" href="#panel2" role="tab">Price</a>
			    </li>
			    <li className="nav-item">
			        <a className="nav-link serviceHeader" data-toggle="tab" href="#panel3" role="tab">Quilt Preparation</a>
			    </li>
			</ul>
			{/* Tab Panels */}
			<div className="tab-content card mt-3">
			    {/* Panel 1 */}
			    <div className="tab-pane fade in show active" id="panel1" role="tabpanel">
			        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
			            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
			            porro voluptate odit minima.</p><img src="../images/thewarmcompanywarmnaturalcottonblendbatting_aiid2055405.jpg" alt="test image" height="100" width="100"/>
			    </div>
			    {/* end Panel 1 */}
			    {/* Panel 2 */}
			    <div className="tab-pane fade" id="panel2" role="tabpanel">
			        <h5>EDGE TO EDGE QUILTING</h5>
					<div className="row quiltSize quiltPrice mt-3">
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 2,500 square inches</h4><h5>$75.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 4,000 square inches</h4><h5>$100.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 6,000 square inches</h4><h5>$125.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 8,000 square inches</h4><h5>$150.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 10,000 square inches</h4><h5>$200.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 12,000 square inches</h4><h5>$225.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 13,000 square inches</h4><h5>$250.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 14,500 square inches</h4><h5>$275.00</h5>
							</section>
					</div>
					<h5 className="mt-4 mb-3">CUSTOM QUILTING</h5>
					<div className="row quiltSize quiltPrice">
							<section className="col-4">
								<h4>Custom Quilting up to 2,500 square inches</h4><h5>$150.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 4,000 square inches</h4><h5>$175.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 5,000 square inches</h4><h5>$200.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 6,000 square inches</h4><h5>$250.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 7,000 square inches</h4><h5>$300.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 8,000 square inches</h4><h5>$350.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 10,000 square inches</h4><h5>$400.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 12,000 square inches</h4><h5>$425.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 13,000 square inches</h4><h5>$45.00</h5>
							</section>
					</div>
			    </div>
			    {/* end Panel 2 */}
			    {/* Panel 3 */}
			    <div className="tab-pane fade" id="panel3" role="tabpanel">
				    <h5>HOW TO PREPARE YOUR QUILT TOP</h5>
				<p>Please make sure all your seams are secure and your threads are clipped. Unclipped threads can show through lighter fabrics.</p>
				<p>Press seam allowances to leave the least bulk at the seams.</p>
				<p>Press your quilt top.</p>
				<p>Mark the top edge of your quilt top with a safety pin.</p>
				<p className="mb-5">Please do not layer top, batting and backing. They are loaded on the quilting machine as separate layers.</p>
				<img className="rounded float-right pl-3" src="../images/Quilt_Prep_Diagram.svg" alt="How to size the back of your quilt" height="300" width="300"/>
				<h5 className="uppercase">How to Prepare Your Quilt Back</h5>
				<p>Cut off any selvage edges before stitching the seam, use at least a &#189;&#34; seam allowance. Leave the selvage edges on outside edges of the quilt backing.</p>
				<p><strong>Size of the back:</strong> must be at least 4-6&#34; wider on each side, top and bottom, than your quilt top. A total of 8-12&#34; larger than your quilt top.</p>
				<p>Trim the top and bottom edges of your backing so they are straight and square. This ensures the quilt loads onto the machine straight; this is important for keeping the design square on your top.</p>
				<p>Press your backing.</p>
				<p className="clearfix">Mark the top edge of your quilt back with a safety pin.</p>
				<h5 className="uppercase">Tips for apply borders:</h5>
				<p><strong>It is important to apply your borders squarely.</strong> If borders longer than the top are put on without accurate measurement, the top will not lay flat. Pleats and puckers may develop during the quilting process.</p>
				<ol>
					<li>Measure your pieced top (before the borders are added). Lay your top out on a flat surface and measure at least three different places across the width and length.</li>
					<li>If these measurements are not equal, calculate the average measurement and use this result to cut the borders.</li>
					<li>Apply the border to the quilt top evenly.</li>
					<li>Fullness and/or puckers within a border cannot be quilted out. We try our best to work in some fullness, but cannot guarantee that puckers and tucks will not be sewn in. Just remember, the flatter your quilt top lays, the better your finished quilt will look.</li>
				</ol>
			    </div>
			    {/* end Panel 3 */}
			</div>
		</div> {/* end div service info */}
	    
	    <div className="container mt-5">
		    <div className="row">
			    <section className="col-4">
				    <section className="text-center">
					    <article className="mb-3">
						    <h6>ESTIMATED COST</h6>
					    </article>
					    <article className="mb-3 price">
						    <h1>&#36;999.99</h1>
					    </article>
					    <article className="mb-3">
						    <h6>COMPLETE THESE STEPS BELOW <br/>TO PLACE YOUR ORDER</h6>
					    </article>
				    </section>
					<div id="accordion">
					  <div class="card">
					    <div class="card-header" id="headingOne">
					      <h5 class="mb-0">
					        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					          + Size your Quilt
					        </button>
					      </h5>
					    </div> {/* end card header */}
					
					    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
					      <div class="card-body">
					        <div className="d-flex justify-content-center">
							  <div className="p-2">Width</div>
							  <div className="p-2">X</div>
							  <div className="p-2">Height</div>
							</div> {/* end flex items */}					     
						 </div> {/* end card body */}
					    </div> {/* end collapse 1 */}
					  </div> {/* end card 1 */}
					  
					  <div class="card">
					    <div class="card-header" id="headingTwo">
					      <h5 class="mb-0">
					        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					          + Pick your batting
					        </button>
					      </h5>
					    </div> {/* end card header */}
					    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
					      <div class="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div> {/* end card body */}
					    </div> {/* end collapse 2 */}
					  </div> {/* end card body */}
					  
					  <div class="card">
					    <div class="card-header" id="headingThree">
					      <h5 class="mb-0">
					        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					          + Quilting options
					        </button>
					      </h5>
					    </div> {/* end card header */}
					    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
					      <div class="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div> {/* end card body */}
					    </div> {/* end collapse 3 */}
					  </div> {/* end card 3 */}
					</div> {/* end accordion */}
			    </section>
			    <section className="col-8 formInfo">
				    <h2 className="boldHeadline">Size your Quilt</h2>
					<h5>HOW TO CALCULATE QUILT SIZE</h5>
					<p>Measure your quilt's length and width. Then, multiple length x width to yield square inches. For example, a 60" x 70" quilt is 4200 square inches because 60 x 70 = 4200. </p>
					<h6><strong>Batting and thread is included in this price: </strong>We use Quilters Dream Blend. You can supply your own batting if you’d like.</h6>
					<h5 className="mt-4">EDGE TO EDGE QUILTING</h5>
					<div className="row quiltSize quiltPrice mt-3">
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 2,500 square inches</h4><h5>$75.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 4,000 square inches</h4><h5>$100.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 6,000 square inches</h4><h5>$125.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 8,000 square inches</h4><h5>$150.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 10,000 square inches</h4><h5>$200.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 12,000 square inches</h4><h5>$225.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 13,000 square inches</h4><h5>$250.00</h5>
							</section>
							<section className="col-4">
								<h4>Edge to Edge Quilting up to 14,500 square inches</h4><h5>$275.00</h5>
							</section>
					</div>
					<h5 className="mt-4 mb-3">CUSTOM QUILTING</h5>
					<div className="row quiltSize quiltPrice">
							<section className="col-4">
								<h4>Custom Quilting up to 2,500 square inches</h4><h5>$150.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 4,000 square inches</h4><h5>$175.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 5,000 square inches</h4><h5>$200.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 6,000 square inches</h4><h5>$250.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 7,000 square inches</h4><h5>$300.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 8,000 square inches</h4><h5>$350.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 10,000 square inches</h4><h5>$400.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 12,000 square inches</h4><h5>$425.00</h5>
							</section>
							<section className="col-4">
								<h4>Custom Quilting up to 13,000 square inches</h4><h5>$45.00</h5>
							</section>
					</div>
			    </section>

		    </div> {/* end row */}
	    </div> {/* end container */}
    </div>
  );
};

export default LongArmPricing;
