const TrustStrip = () => {
  return (
    <div className="trust-strip">
      <div className="container">
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <span className="trust-icon">🚚</span>
              <div className="trust-text-wrap">
                <div className="trust-label">Free Shipping</div>
                <div className="trust-sub">Orders above ₹1,999</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <div className="trust-text-wrap">
                <div className="trust-label">1-Year Warranty</div>
                <div className="trust-sub">On all gadgets</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              <div className="trust-text-wrap">
                <div className="trust-label">Secure Payments</div>
                <div className="trust-sub">256-bit encrypted</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <span className="trust-icon">🔄</span>
              <div className="trust-text-wrap">
                <div className="trust-label">Easy Returns</div>
                <div className="trust-sub">7-day hassle-free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
