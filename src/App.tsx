import React from 'react'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditText from './EditText';
const App = () => {
  const[content,setContent]=React.useState("MY NAME IS MOHIT");
  return (
<div>
  <EditText content={content} setContent={setContent}/>
</div>
    )
}

export default App