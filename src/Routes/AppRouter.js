import React from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

const Nav = ()=>{
    return(
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/contact">Contact</Link> |
      <Link to="/products">Products</Link> |
    </nav>
    )
  }
  
  function HomePage() {
    return <div>
    Home Page
  </div>
  }
  
  function ContactPage() {
    return <div>
      Contact Page
    </div>
  }
  
  function ProductsPage() {
    return <div>
    Products Page  
  
  </div>
  }
  
  function NotFound() {
    return <div>Sayfa Bulunamadı</div>
  }
  const routes = (
    <BrowserRouter>
      <Nav></Nav>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/products' component={ProductsPage}/>
        <Route exact component={NotFound}/>
      </Switch>
  
    </BrowserRouter>
  )