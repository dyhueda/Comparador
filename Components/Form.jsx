import React from "react";

const Form = ({ state, updateValues }) => {
  const { quantity1, quantity2, price1, price2, measure1, measure2,type1, type2 } = state;
  const quantities = [1, 2, 5, 6, 8, 10, 12, 15]
  const measures = [1, 75, 50, 100, 150, 350, 500, 700, 1500, 2000]
  const types=['g','ml', 'cm']
  return (
    <section className="section">
      <div className="input-container-left">
        <div className="input-group">
          <label>First item quantity</label>
          <input
            onChange={(e) => {
              updateValues({
                quantity1: e.target.value,
              });
            }}
            value={quantity1}
            type="number"
            id="quantity1"
          />
          <div>
            {quantities.map((q) => {
              return (
                <div
                  className={`button ${quantity1 == q ? "active" : ""
                    }`}
                  onClick={() => {
                    updateValues({ quantity1: q });
                  }}
                  key={q}
                >{`${q}`}</div>
              )
            })}
          </div>
        </div>
        <div className="input-group">
          <label>First item:</label>
          <div>
            {types.map((t) => {
              return (
                <div
                  className={`button ${type1 == t ? "active" : ""
                    }`}
                  onClick={() => {
                    updateValues({ type1: t });
                  }}
                  key={t}
                >{`${t}`}</div>
              )
            })}
          </div>
          <input
            onChange={(e) => {
              updateValues({
                measure1: e.target.value,
              });
            }}
            value={measure1}
            type="number"
            id="measure1"
          />
          <div>
            {measures.map((m) => {
              return (
                <div
                  className={`button ${measure1 == m ? "active" : ""
                    }`}
                  onClick={() => {
                    updateValues({ measure1: m });
                  }}
                  key={m}
                >{`${m}`}</div>
              )
            })}
          </div>
        </div>

        <div className="input-group">
          <label>First item price</label>
          <input
            onChange={(e) => {
              updateValues({
                price1: e.target.value,
              });
            }}
            value={price1}
            type="number"
            id="price1"
          />
        </div>
      </div>
      <div className="input-container-right">
        <div className="input-group">
          <label>Second item quantity</label>
          <input
            onChange={(e) => {
              updateValues({
                quantity2: e.target.value,
              });
            }}
            value={quantity2}
            type="number"
            id="quantity2"
          />
          <div>
            {quantities.map((q) => {
              return (
                <div
                  className={`button ${quantity2 == q ? "active" : ""
                    }`}
                  onClick={() => {
                    updateValues({ quantity2: q });
                  }}
                  key={q}
                >{`${q}`}</div>
              )
            })}
          </div>
        </div>
        <div className="input-group">
          <label>Second item:</label>
          <div>
            {types.map((t) => {
              return (
                <div
                  className={`button ${type2 == t ? "active" : ""
                    }`}
                  onClick={() => {
                    updateValues({ type2: t });
                  }}
                  key={t}
                >{`${t}`}</div>
              )
            })}
          </div>
          <input
            onChange={(e) => {
              updateValues({
                measure2: e.target.value,
              });
            }}
            value={measure2}
            type="number"
            id="measure2"
          />
          <div>
            {measures.map((m) => {
              return (
                <div
                  className={`button ${measure2 == m ? "active" : ""
                    }`}
                  onClick={() => {
                    updateValues({ measure2: m });
                  }}
                  key={m}
                >{`${m}`}</div>
              )
            })}
          </div>
        </div>

        <div className="input-group">
          <label>Second item price</label>
          <input
            onChange={(e) => {
              updateValues({
                price2: e.target.value,
              });
            }}
            value={price2}
            type="number"
            id="price2"
          />
        </div>

      </div>
    </section>

  );
};

export default Form;
