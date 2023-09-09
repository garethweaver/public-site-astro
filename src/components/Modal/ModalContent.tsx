import styles from './Modal.module.sass'
import type { UserData } from './Modal.types.js'

export default ({ userData }: { userData: UserData }) => (
  <>
    <div className={styles.bio}>
      <a
        target="_blank"
        className={styles.link}
        href={userData.url}>
        <img
          width="120"
          height="120"
          className={styles.avatar}
          src={userData.avatarUrl}
          alt={`${userData.name} github profile avatar`} />
          <h2 className={styles.name}>@{userData.login}</h2>
        </a>
        <p>{Math.floor((Date.parse(new Date().toString()) - Date.parse(new Date(userData.createdAt).toString())) / 86400000)} days on Github</p>
        <p>{userData.repositories.totalCount} public repositories</p>
        <p>{userData.repositories.totalDiskUsage} bytes of code</p>
    </div>
    <div className={styles.repos}>
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
    </div>
    {/*
    <div className="graph">
      <img
        className="graph"
        src="https://ghchart.rshah.org/201334/garethweaver"
        alt="garethweaver github activity graph" />
    </div>
    */}
  </>
)
