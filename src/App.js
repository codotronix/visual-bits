import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes'
import { Header, Footer } from './components/layout'

function App() {
  return (
    <div>
      
      <header>
        <Header />
      </header>

      <div className="main-container container-fluid">
        <Router basename="/visual-bits">
          <Switch>
            {
              routes.map(r => <Route {...r} exact key={r.path} />)
            }
          </Switch>
        </Router>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
