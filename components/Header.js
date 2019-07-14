import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
    <div>
      <Link href='/'>
        <a style={ linkStyle }>Home</a>
      </Link>
      <Link href='/about'>
        <a style={ linkStyle }>About</a>
      </Link>
      <style jsx>{`
        @font-face {
          font-family: 'Open Sans';
          src: url('../fonts/OpenSans-Regular.ttf');
        }
        
        * {
          font-family: 'Open Sans';
        }
         
        a, a:hover {
          text-decoration: none;
          color: blue;
        }
      `}</style>
    </div>
);

export default Header;
