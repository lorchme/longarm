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
					<p>Measure your quilt's length and width.  Then, multiple length x width to yield square inches.</p>
					<p>For example, a 60" x 70" quilt is 4200 square inches because 60 x 70 = 4200. </p>
			    </section>

		    </div> {/* end row */}
	    </div> {/* end container */}
    </div>
  );
};

export default LongArmPricing;
