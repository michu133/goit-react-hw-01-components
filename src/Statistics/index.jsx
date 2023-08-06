import styles from './Statistics.module.css';
import propTypes from 'prop-types';
export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : <></>}

      <ul className={styles.stat__list}>
        {stats.length > 0 ? (
          stats.map(({ id, label, percentage }) => {
            return (
              <li className={styles.item} key={id}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
              </li>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string,
      percentage: propTypes.number,
    })
  ),
};
