import { Button } from '../ui/button'

const Footer = () => {
  return (
    <footer className="flex flex-1 w-full items-end justify-center">
      <ul className="flex flex-wrap">
        <li>
          <Button variant={'link'} title="github">
            <a
              href="https://github.com/AliceMenzie"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </Button>
        </li>
        <li>
          <Button variant={'link'} title="github">
            <a
              href="https://www.linkedin.com/in/alice-menzie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </Button>
        </li>
        <li>
          <Button variant={'link'} title="github">
            <a
              href="https://www.alicemenzie.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              alice-menzie
            </a>
          </Button>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
