(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"] =
  this["webpackJsonpgoit-react-hw-04-hooks-phonebook"] || []).push([
  [0],
  {
    16: function (t, e, n) {},
    18: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(1),
        c = n(9),
        r = n.n(c),
        o = (n(16), n(11)),
        s = n(10),
        i = n(3),
        u = n(20),
        l = n(6),
        b = n.n(l),
        j = n(0),
        d = function (t) {
          var e = t.contacts,
            n = t.deletContact;
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsx)("div", {
              children: Object(j.jsx)("ol", {
                className: b.a.list,
                children: e.map(function (t) {
                  return Object(j.jsxs)(
                    "li",
                    {
                      className: b.a.data,
                      children: [
                        Object(j.jsxs)("p", {
                          children: [t.name, " : ", t.number],
                        }),
                        Object(j.jsx)("button", {
                          className: b.a.btn,
                          type: "button",
                          id: t.id,
                          onClick: n,
                          children: "Delete",
                        }),
                      ],
                    },
                    t.id
                  );
                }),
              }),
            }),
          });
        },
        m = n(7),
        O = n.n(m),
        h = function (t) {
          var e = t.value,
            n = t.onChange;
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsx)("div", {
              className: O.a.form,
              children: Object(j.jsxs)("label", {
                children: [
                  Object(j.jsx)("p", {
                    className: O.a.inputName,
                    children: "Find contacts by name",
                  }),
                  Object(j.jsx)("input", {
                    className: O.a.input,
                    type: "text",
                    name: "filter",
                    value: e,
                    onChange: n,
                    pattern:
                      "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
                    title:
                      "\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",
                    required: !0,
                  }),
                ],
              }),
            }),
          });
        },
        p = n(2),
        _ = n.n(p),
        f = function (t) {
          var e = t.isExistContact,
            n = t.addNewContact,
            c = Object(a.useState)(""),
            r = Object(i.a)(c, 2),
            o = r[0],
            s = r[1],
            u = Object(a.useState)(""),
            l = Object(i.a)(u, 2),
            b = l[0],
            d = l[1],
            m = function (t) {
              var e = t.target,
                n = e.value;
              switch (e.name) {
                case "name":
                  s(n);
                  break;
                case "number":
                  d(n);
                  break;
                default:
                  return;
              }
            };
          return Object(j.jsxs)("form", {
            className: _.a.calculateForm,
            onSubmit: function (t) {
              t.preventDefault(),
                e(o)
                  ? alert("".concat(o, " is already exist"))
                  : n({ name: o, number: b }),
                s(function (t) {
                  return "";
                }),
                d(function (t) {
                  return "";
                });
            },
            children: [
              Object(j.jsxs)("label", {
                children: [
                  Object(j.jsx)("p", {
                    className: _.a.inputName,
                    children: "Name:",
                  }),
                  Object(j.jsx)("input", {
                    className: _.a.input,
                    type: "text",
                    name: "name",
                    value: o,
                    onChange: m,
                    pattern:
                      "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
                    title:
                      "\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",
                    required: !0,
                  }),
                ],
              }),
              Object(j.jsxs)("label", {
                children: [
                  Object(j.jsx)("p", {
                    className: _.a.inputName,
                    children: "Number:",
                  }),
                  Object(j.jsx)("input", {
                    className: _.a.input,
                    type: "tel",
                    name: "number",
                    value: b,
                    onChange: m,
                    pattern:
                      "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
                    title:
                      "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",
                    required: !0,
                  }),
                ],
              }),
              Object(j.jsx)("div", {
                className: _.a.calculateForm__btn,
                children: Object(j.jsx)("button", {
                  className: _.a.btn,
                  type: "submit",
                  children: "Add Contact",
                }),
              }),
            ],
          });
        },
        x = function () {
          var t,
            e = Object(a.useState)(
              null !== (t = JSON.parse(localStorage.getItem("contacts"))) &&
                void 0 !== t
                ? t
                : ""
            ),
            n = Object(i.a)(e, 2),
            c = n[0],
            r = n[1],
            l = Object(a.useState)(""),
            b = Object(i.a)(l, 2),
            m = b[0],
            O = b[1];
          Object(a.useEffect)(
            function () {
              localStorage.setItem("contacts", JSON.stringify(c));
            },
            [c]
          );
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              children: [
                Object(j.jsx)("h1", { children: "Phonebook" }),
                Object(j.jsx)(f, {
                  isExistContact: function (t) {
                    return c.some(function (e) {
                      return e.name.toLowerCase() === t.toLowerCase();
                    });
                  },
                  addNewContact: function (t) {
                    r(function (e) {
                      return [].concat(Object(s.a)(e), [
                        Object(o.a)({ id: Object(u.a)() }, t),
                      ]);
                    });
                  },
                }),
                Object(j.jsx)("h2", { children: "Contacts" }),
                Object(j.jsx)(h, {
                  value: m,
                  onChange: function (t) {
                    var e = t.target.value;
                    O(e);
                  },
                }),
                Object(j.jsx)(d, {
                  contacts: (function () {
                    var t = m.toLowerCase();
                    return t
                      ? c.filter(function (e) {
                          return e.name.toLowerCase().includes(t);
                        })
                      : c;
                  })(),
                  deletContact: function (t) {
                    var e = t.target.id;
                    r(function (t) {
                      return t.filter(function (t) {
                        return t.id !== e;
                      });
                    });
                  },
                }),
              ],
            }),
          });
        };
      r.a.render(
        Object(j.jsx)(j.Fragment, { children: Object(j.jsx)(x, {}) }),
        document.getElementById("root")
      );
    },
    2: function (t, e, n) {
      t.exports = {
        calculateForm: "calculateForm_calculateForm__3ZnCy",
        calculateForm__btn: "calculateForm_calculateForm__btn__3aot2",
        btn: "calculateForm_btn__YXXEK",
        inputName: "calculateForm_inputName__2ifjL",
        input: "calculateForm_input__1VYTt",
      };
    },
    6: function (t, e, n) {
      t.exports = {
        list: "ContactList_list__2X8DA",
        data: "ContactList_data__3_gAB",
        btn: "ContactList_btn__2gYaZ",
      };
    },
    7: function (t, e, n) {
      t.exports = {
        form: "Filter_form__19jMi",
        inputName: "Filter_inputName__29Y7e",
        input: "Filter_input__2C-X5",
      };
    },
  },
  [[18, 1, 2]],
]);
//# sourceMappingURL=main.c3ad1a23.chunk.js.map