import React, { useState }from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
/* import Modal from 'react-modal' */
import ReactDOM from 'react-dom';
import Modal from './Modal'


/* Modal.setAppElement('#root') */


export default function Editor(details) {
    const {
        language,
        displayName,
        value,
        onChange,
    } = details
    const [open, setOpen] = useState(true)
    const [fontSize, setFontSize] = useState(20)
    function handleChange(editor, data, value){
        onChange(value)
    }
    /* const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    
    document.body.style.backgroundColor="red";

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    }; */

    const button_wrapper = {
        position: `relative`,
        zIndex: 1
    }

    const [isOpen, setIsOpen] = useState(false)

    let message
    if (displayName==="HTML5") {
        message= <div>
                <h1>HTML5 Basic Syntax</h1>
                <pre>
                    &lt;tagname&gt;Content goes here...&lt;/tagname&gt;
                </pre>
                <ul>Example of tagname: 
                    <li>h1</li>
                    <li>p</li>
                    <li>a</li>
                    <li>img</li>
                </ul>
                For more info and notes you can visit <a href="https://www.w3schools.com/html/html_basic.asp" target="_blank" rel="noopener noreferrer">w3schools</a>
            </div>
    }else if (displayName==="CSS") {
        message= <div>
                <h1>CSS Basic Syntax</h1>
                <pre>
                    selector &#123; property&#58; value&#59; &#125;
                </pre>
                <strong>Selector</strong> <br/>
                The element selector selects HTML elements based on the element name.<br/>
                <ul><strong>Example of property:</strong>
                    <li>font-size</li>
                    <li>color</li>
                </ul>
                <ul><strong>Example of value:</strong>
                    <li>15px</li>
                    <li>red</li>
                </ul>
                For more info and notes you can visit <a href="https://www.w3schools.com/css/css_syntax.asp" target="_blank" rel="noopener noreferrer">w3schools</a>
            </div>
    } else {
        message= <div>
                <h1>JavaScript Example</h1>
                <pre>document.body.style.backgroundColor = "red";</pre>
                Above snippets can be use to change background colour.<br/> Copy and paste to try it yourself <br/><br/>
                For more info and notes you can visit <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank" rel="noopener noreferrer">w3schools</a>
            </div>
    }


    return (
        <div className={`container ${open ? '' : 'collapsed'}`}
        style={{
            fontSize: `${fontSize}px`,
        }}>
{/*             <div className="Lang">{displayName}</div> */}
            <div className="title">
            {displayName}
            <div style={button_wrapper}>
                <button onClick={()=>setIsOpen(true)}> Help! </button>
                <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                    {message}
                </Modal>
            </div>
                {/* <div>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                >

                <h2 >Test</h2>
                <button onClick={closeModal}>close</button>
                <div>Test content</div>
                </Modal>
                </div> */}
                <div>
                    <button onClick={() => setFontSize(fontSize + 2)}>
                        + font
                    </button>
                    <button onClick={() => setFontSize(20)}>
                        Reset
                    </button>
                    <button onClick={() => setFontSize(fontSize - 2)}>
                        - font
                    </button>
                </div>
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                >Toggle</button>
            </div>
            {/*  <div className="{`container ${open ? '' : 'collapsed'}`" style={{
                    fontSize: `${fontSize}px`,
                }}> */}
            
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className ="codemirror"
                options={{
                lineWrapping: true, lint: true, mode: language, lineNumbers: true, theme: 'xq_light',
                }}
            />
            
            {/* </div> */}
        </div>
    )
}