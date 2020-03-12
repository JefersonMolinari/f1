const Footer = () => (
  <footer className="footer">
  	<p className="attribute">&copy; <a href="https://andydev.co.uk" rel="author developer">Andrew Yates</a>, <a href="https://andyhiggs.uk/" rel="author designer">Andy Higgs</a>, <a href="https://sijobling.com" rel="author developer">Si Jobling</a> &amp; <a href="http://abitgone.co.uk/" rel="author">Ant Williams</a> 2020</p>
  	<p>We’re on <a href="https://twitter.com/f1cal" className="twitter">Twitter</a> · Open Sourced on <a href="https://github.com/sportstimes/f1">GitHub</a> · Spotted an issue? <a href="https://twitter.com/intent/tweet?text=%40f1cal%20I%20spotted%20an%20issue...">Report</a></p>
  	<p>Support F1 Calendar, <a href="buymeacoff.ee/f1cal">buy us a coffee</a>.</p>
  	<p>A ‘KickOff’ Production · V2.0</p>
  	<p>Formula One, Formula 1, F1 & Grand Prix are trademarks of Formula One Licensing BV.</p>
	<style jsx>{`
		.footer {
			margin: 75px 16px 20px 16px;
		}
		p { color: #aaa; font-size:12px; text-align:center; }
		p a { color: #ccc; text-decoration:none; }
	`}</style>
  </footer>
);

export default Footer;