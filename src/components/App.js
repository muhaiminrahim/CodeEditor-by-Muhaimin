import Editor from './Editor';
import { Header } from './common';
import { useState, useEffect } from 'react';


function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [output, setOutput] = useState('')


  useEffect(()=>{
    const time = setTimeout(()=>{
      setOutput(`
        <html>  
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 1000)
    return() => clearTimeout(time)
  }, [html, css, js])

  return (
    <>
      <Header />
      <div className="display top-display">
        <Editor 
          language="xml" 
          displayName="HTML5" value={html} onChange={setHtml}
        />
        <Editor 
          language="css" 
          displayName="CSS" value={css} onChange={setCss}
        />
        <Editor 
          language="javascript" 
          displayName="JavaScript" value={js} onChange={setJs}
        />
      </div>
      <div className="display">
        <iframe
          srcDoc={output}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
