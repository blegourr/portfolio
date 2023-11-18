import PropTypes from 'prop-types';
import Home from '../../Home/First_Layers';
import './Mirroir.css'

function PortfolioItem({ depth}) {
  if (depth === 0) {
    return null; // Arrête la récursion lorsqu'on atteint la profondeur désirée
  }

  return (
    <div className="portfolioFirstLayersContainer" >
      <Home/>
      <PortfolioItem depth={depth - 1} />
    </div>
  );
}

PortfolioItem.propTypes = {
  depth: PropTypes.number.isRequired,
};

export default PortfolioItem;