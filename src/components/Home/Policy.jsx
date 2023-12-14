import policyData from "../../assets/data/policy";

const Policy = () => {
  return (
    <div className="policy">
      {policyData.getAllPolicies().map((item, index) => {
        return (
          <div className="policy__item" key={index}>
            <div className="policy__item__icon">{item.icon}</div>
            <div className="policy__item__info">
              <div className="policy__item__info__title">{item.title}</div>
              <div className="policy__item__info__sub">{item.sub}</div>
              <div className="policy__item__info__short">{item.short}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Policy;
