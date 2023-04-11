export default ({ use, className }) => (
  <svg height="24" width="24" className={className}>
    <use href={`/icons/${use}.svg#icon`} />
  </svg>
)
