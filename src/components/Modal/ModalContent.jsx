import styles from './Modal.module.sass'

export default ({ userData }) => (
  <>
    <div className="graph">
    {/*
      <img
        className="graph"
        src="https://ghchart.rshah.org/201334/garethweaver"
        alt="garethweaver github activity graph" />
    */}
    </div>
    <div className={styles.bio}>
      <img
        width="100"
        height="100"
        className={styles.avatar}
        src={userData.avatarUrl}
        alt={`${userData.name} github profile avatar`} />
      <div>
        <a
          target="_blank"
          href={userData.url}>
          <h2 className={styles.name}>@{userData.login}</h2>
        </a>
        <p>{Math.floor((Date.parse(new Date()) - Date.parse(new Date(userData.createdAt))) / 86400000)} days on Github</p>
        <p>{userData.repositories.totalCount} public repositories</p>
        <p>{userData.repositories.totalDiskUsage} bytes of code</p>
      </div>
    </div>
    <h4>Recent repositories</h4>
    <ul>
      {userData.repositories.nodes.reverse().map(repo => (
        <li key={repo.name}>
          <a
            target="_blank"
            href={repo.url}>
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  </>
)
