import styles from "./Footer.module.css"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import leetcode from "../assets/leetcode.png"

const Footer = () => {
  const socialProfiles = [
    { 
      name: "LinkedIn", 
      icon: linkedin, 
      url: "https://www.linkedin.com/in/paggilla-saketh-95a84833b" 
    },
    { 
      name: "GitHub", 
      icon: github, 
      url: "https://github.com/saketh-04" 
    },
    { 
      name: "LeetCode", 
      icon: leetcode, 
      url: "https://leetcode.com/u/killer_saketh123/" 
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2025 Paggilla Saketh. All rights reserved.
        </p>

        <div className={styles.socialProfiles}>
          {socialProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={profile.name}
            >
              <img 
                src={profile.icon} 
                alt={profile.name} 
                className={styles.socialIcon} 
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
