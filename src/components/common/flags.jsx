import "./flags.scss";

const Flags = () => {
  return (
    <div className="flags-wrapper">
      <Image
        src="/images/flags/eu.svg"
        alt="eu-flags"
        className="flag flag-eu"
        fluid
      />
      <Image
        src="/images/flags/tr.svg"
        alt="tr-flags"
        className="flag flag-tr"
        fluid
      />
    </div>
  );
};

export default Flags;
