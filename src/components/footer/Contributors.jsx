import React from 'react';

import Contributor from './Contributor';

const contributors = () => (
    <div className="contributors">
        <h1>Contributors</h1>
        <div className='contributors-container'>
            <Contributor
                name="Billy Vlachos"
                github="https://github.com/lakylekidd"
                linkdin="https://www.linkedin.com/in/billy-vlachos"
            />
            <Contributor
                name="Yuri van Schaaik"
                linkdin="https://www.linkedin.com/in/yuri-van-schaaik-603006180"
                github="https://github.com/YvanSchaaik"
            />
            <Contributor
                name="Adrianus Cornet"
                linkdin="https://www.linkedin.com/in/adrianus-cornet-27390a172"
                github="https://github.com/AdrianusCornet"
            />
            <Contributor
                name="Rejin Cusi"
                linkdin="https://nl.linkedin.com/in/rejin-cusi-9b84b9178"
                github="https://github.com/rejincusi"
            />
            <Contributor
                name="Kamaal Farah"
                linkdin="https://www.linkedin.com/in/kamaal-farah-18b568b7/"
                github="https://github.com/kamaal111"
            />
            <Contributor
                name="Zorawar Singh"
                linkdin="https://www.linkedin.com/in/zorawar-singh-34050196/"
                github="https://github.com/zorawar1090"
            />
            <Contributor
                name="Nicola Urech"
                linkdin="https://www.linkedin.com/in/nicola-urech-b79448119/"
                github="https://github.com/nicolaurech"
            />
        </div>
    </div>
);

export default contributors;
