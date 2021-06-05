export default function Footer() {
  var curyear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p> Copyright @ {curyear}</p>
      </footer>
    </div>
  );
}
