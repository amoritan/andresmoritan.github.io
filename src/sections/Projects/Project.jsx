import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Badge from '../../components/Badge';
import './Project.css';

function Project(props) {
  const [active, setActive] = useState(false);

  const { data } = props;
  const {
    name,
    photo,
    description,
    tags,
  } = data;

  return (
    <article className={`Project ${active && 'active'}`}>
      <button type="button" className="Project-photo" onClick={() => { setActive(!active); }}>
        <img src={photo} alt={name} width="480" height="480" />
      </button>
      <div className="Project-details">
        <h4>{name}</h4>
        { tags.map((tag) => <Badge data={tag} key={tag.icon} />) }
        <p>{description}</p>
      </div>
    </article>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    tags: PropTypes.array,
  }).isRequired,
};

export default Project;
