import React, { useState } from 'react';
import { render } from 'react-dom';
import ImageEditorWrapper from './react/ImageEditorWrapper';

const App = () => {
    const src = 'https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg';
    const [show, toggle] = useState(false);


    return (
        <div>
            <h1>Filerobot Image Editor</h1>
            <button type="button" onClick={() => { toggle(true) }} >Open Editor</button>

            <ImageEditorWrapper
                show={show}
                src={document.querySelector('input[name="image-src"]').value}
                onClose={() => { toggle(false) }}
            />
        </div>
    )
};

render(<App />, document.getElementById('app'));