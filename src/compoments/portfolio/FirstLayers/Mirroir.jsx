import PropTypes from 'prop-types';

function PortfolioItem({ depth }) {
  if (depth === 0) {
    return null; // Arrête la récursion lorsqu'on atteint la profondeur désirée
  }

  return (
    <div className="portfolioFirstLayers">
      {/* Contenu du portfolio */}
      1234
      <PortfolioItem depth={depth - 1} />
    </div>
  );
}

PortfolioItem.propTypes = {
  depth: PropTypes.number.isRequired,
};

export default PortfolioItem;