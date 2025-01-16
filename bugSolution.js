```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent/*" element={<ParentRoutes/>}/ >
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function ParentRoutes() {
    let { id } = useParams();
    return(
        <div> 
            <Routes>
                <Route path=':id' element={<NestedRoute id={id}/>}/ >
            </Routes>
        </div>
    );
}

function NestedRoute({id}) {return <div>Nested Route {id}</div>}
function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function NotFound() {return <div>Not Found</div>}
export default App; 
```