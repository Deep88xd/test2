(window.webpackJsonpbmical = window.webpackJsonpbmical || []).push([
  [0],
  {
    154: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(45),
        i = a.n(c),
        l = (a(55), a(49)),
        o = a(9),
        s = a(46),
        m = (a(58), a(29), a(16));
      function d(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var u = { weight: "", height: "", date: "" },
        h = function (e) {
          var t = e.change,
            a = Object(n.useState)(u),
            c = Object(o.a)(a, 2),
            i = c[0],
            l = c[1],
            s = function (e) {
              var t,
                a = e.target,
                n = a.value,
                r = a.name;
              n > 999 && (n = 999);
              var c = new Date().toLocaleString().split(",")[0];
              l(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? d(a, !0).forEach(function (t) {
                          Object(m.a)(e, t, a[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(a)
                        )
                      : d(a).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(a, t)
                          );
                        });
                  }
                  return e;
                })(
                  {},
                  i,
                  ((t = {}), Object(m.a)(t, r, n), Object(m.a)(t, "date", c), t)
                )
              );
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "row" },
              r.a.createElement(
                "div",
                { className: "col m6 s12" },
                r.a.createElement(
                  "label",
                  { htmlFor: "weight" },
                  "Weight (in kg)"
                ),
                r.a.createElement("input", {
                  id: "weight",
                  name: "weight",
                  type: "number",
                  min: "1",
                  max: "999",
                  placeholder: "50",
                  value: i.weight,
                  onChange: s,
                })
              ),
              r.a.createElement(
                "div",
                { className: "col m6 s12" },
                r.a.createElement(
                  "label",
                  { htmlFor: "height" },
                  "Height (in cm)"
                ),
                r.a.createElement("input", {
                  id: "height",
                  name: "height",
                  type: "number",
                  min: "1",
                  max: "999",
                  placeholder: "176",
                  value: i.height,
                  onChange: s,
                })
              )
            ),
            r.a.createElement(
              "div",
              { className: "center" },
              r.a.createElement(
                "button",
                {
                  id: "bmi-btn",
                  className: "calculate-btn",
                  type: "button",
                  disabled: "" === i.weight || "" === i.height,
                  onClick: function () {
                    t(i), l(u);
                  },
                },
                "Calculate BMI"
              )
            )
          );
        },
        g = function (e) {
          var t = e.weight,
            a = e.height,
            n = e.id,
            c = e.date,
            i = e.bmi,
            l = e.deleteCard;
          return r.a.createElement(
            "div",
            { className: "col m6 s12" },
            r.a.createElement(
              "div",
              { className: "card" },
              r.a.createElement(
                "div",
                { className: "card-content" },
                r.a.createElement(
                  "span",
                  { className: "card-title", "data-test": "bmi" },
                  "BMI: ",
                  i
                ),
                r.a.createElement(
                  "div",
                  { className: "card-data" },
                  r.a.createElement(
                    "span",
                    { "data-test": "weight" },
                    "Weight: ",
                    t,
                    " kg"
                  ),
                  r.a.createElement(
                    "span",
                    { "data-test": "height" },
                    "Height: ",
                    a,
                    " cm"
                  ),
                  r.a.createElement(
                    "span",
                    { "data-test": "date" },
                    "Date: ",
                    c
                  )
                ),
                r.a.createElement(
                  "button",
                  {
                    className: "delete-btn",
                    onClick: function () {
                      l(n);
                    },
                  },
                  "X"
                )
              )
            )
          );
        },
        b = a(47),
        f = function (e) {
          var t = e.labelData,
            a = e.bmiData;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(b.a, {
              data: function (e) {
                var n = e
                  .getContext("2d")
                  .createLinearGradient(63, 81, 181, 700);
                return (
                  n.addColorStop(0, "#929dd9"),
                  n.addColorStop(1, "#172b4d"),
                  {
                    labels: t,
                    datasets: [
                      {
                        label: "BMI",
                        data: a,
                        backgroundColor: n,
                        borderColor: "#3F51B5",
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointHoverBorderColor: "white",
                        pointHoverBorderWidth: 2,
                      },
                    ],
                  }
                );
              },
              options: {
                responsive: !0,
                scales: {
                  xAxes: [
                    {
                      scaleLabel: {
                        display: !0,
                        labelString: "Date",
                        fontSize: 18,
                        fontColor: "white",
                      },
                      gridLines: { display: !1, color: "white" },
                      ticks: { fontColor: "white", fontSize: 16 },
                    },
                  ],
                  yAxes: [
                    {
                      scaleLabel: {
                        display: !0,
                        labelString: "BMI",
                        fontSize: 18,
                        fontColor: "white",
                      },
                      gridLines: { display: !1, color: "white" },
                      ticks: {
                        fontColor: "white",
                        fontSize: 16,
                        beginAtZero: !0,
                      },
                    },
                  ],
                },
                tooltips: { titleFontSize: 13, bodyFontSize: 13 },
              },
            })
          );
        },
        p = function (e) {
          if (localStorage)
            try {
              return JSON.parse(localStorage.getItem(e));
            } catch (t) {
              console.error(
                "Error getting item ".concat(e, " from localStorage"),
                t
              );
            }
        },
        E = function (e, t) {
          if (localStorage)
            try {
              return localStorage.setItem(e, JSON.stringify(t));
            } catch (a) {
              console.error(
                "Error storing item ".concat(e, " to localStorage"),
                a
              );
            }
        },
        v = function () {
          var e = Object(n.useState)(function () {
              return p("data") || [];
            }),
            t = Object(o.a)(e, 2),
            a = t[0],
            c = t[1],
            i = Object(n.useState)({}),
            m = Object(o.a)(i, 2),
            d = m[0],
            u = m[1];
          Object(n.useEffect)(
            function () {
              E("data", a);
              var e = a.map(function (e) {
                  return e.date;
                }),
                t = a.map(function (e) {
                  return e.bmi;
                });
              u({ date: e, bmi: t });
            },
            [a]
          );
          var b = function (e) {
            E("lastState", a);
            var t = a.filter(function (t) {
              return t.id !== e;
            });
            c(t);
          };
          return r.a.createElement(
            "div",
            { className: "container" },
            r.a.createElement(
              "div",
              { className: "row center" },
              r.a.createElement(
                "h1",
                { className: "white-text" },
                " BMI Tracker "
              )
            ),
            r.a.createElement(
              "div",
              { className: "row" },
              r.a.createElement(
                "div",
                { className: "col m12 s12" },
                r.a.createElement(h, {
                  change: function (e) {
                    var t = e.height / 100;
                    (e.bmi = (e.weight / (t * t)).toFixed(2)),
                      (e.id = Object(s.v4)());
                    var n = [].concat(Object(l.a)(a), [e]),
                      r = n.length;
                    r > 7 && (n = n.slice(1, r)), c(n);
                  },
                }),
                r.a.createElement(f, { labelData: d.date, bmiData: d.bmi }),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "div",
                    { className: "row center" },
                    r.a.createElement(
                      "h4",
                      { className: "white-text" },
                      "7 Day Data"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "data-container row" },
                    a.length > 0
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          a.map(function (e) {
                            return r.a.createElement(g, {
                              key: e.id,
                              id: e.id,
                              weight: e.weight,
                              height: e.height,
                              date: e.date,
                              bmi: e.bmi,
                              deleteCard: b,
                            });
                          })
                        )
                      : r.a.createElement(
                          "div",
                          { className: "center white-text" },
                          "No log found"
                        )
                  )
                ),
                null !== p("lastState")
                  ? r.a.createElement(
                      "div",
                      { className: "center" },
                      r.a.createElement(
                        "button",
                        {
                          className: "calculate-btn",
                          onClick: function () {
                            c(p("lastState"));
                          },
                        },
                        "Undo"
                      )
                    )
                  : ""
              )
            )
          );
        };
      i.a.render(r.a.createElement(v, null), document.getElementById("root"));
    },
    29: function (e, t, a) {},
    50: function (e, t, a) {
      e.exports = a(154);
    },
    55: function (e, t, a) {},
  },
  [[50, 1, 2]],
]);

