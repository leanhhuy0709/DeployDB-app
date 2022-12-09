

function Register() {
    return (
        <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://kenh14cdn.com/2019/1/8/4995656719667929102966318149136050321345958n-15469318684021678696220.jpg"
                      alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body px-4 py-0 text-black">
      
                      <form>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                            <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Bach-Khoa-HCMUT.png"
                            alt="login form" style={{width: "50px", height: "50px", marginRight: "20px"}}/>
                          <span className="h1 fw-bold mb-0">Register</span>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg"
                          placeholder='Enter username' />
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" 
                          placeholder='Enter password' />
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button">Register</button>
                        </div>

            
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Register;
