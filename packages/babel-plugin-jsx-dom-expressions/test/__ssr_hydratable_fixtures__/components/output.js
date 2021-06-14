import { For as _$For } from "r-server";
import { createComponent as _$createComponent } from "r-server";
import { mergeProps as _$mergeProps } from "r-server";
import { ssr as _$ssr } from "r-server";
import { escape as _$escape } from "r-server";
import { getHydrationKey as _$getHydrationKey } from "r-server";
const _tmpl$ = ['<div data-hk="', '">Hello <!--#-->', "<!--/--></div>"],
  _tmpl$2 = ['<div data-hk="', '">', "</div>"],
  _tmpl$3 = ['<div data-hk="', '">From Parent</div>'],
  _tmpl$4 = [
    '<div data-hk="',
    '"><!--#-->',
    "<!--/--><!--#-->",
    "<!--/--><!--#-->",
    "<!--/--></div>"
  ],
  _tmpl$5 = ['<div data-hk="', '"></div>'],
  _tmpl$6 = [
    '<div data-hk="',
    '"><!--#-->',
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--></div>"
  ],
  _tmpl$7 = [
    '<div data-hk="',
    '"><!--#-->',
    "<!--/--> | <!--#-->",
    "<!--/--><!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--><!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--></div>"
  ],
  _tmpl$8 = ['<div data-hk="', '"> | <!--#-->', "<!--/--> |  |  | <!--#-->", "<!--/--> | </div>"];
import { Show } from "somewhere";

const Child = props => [
  _$ssr(_tmpl$, _$getHydrationKey(), _$escape(props.name)),
  _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(props.children))
];

const template = props => {
  let childRef;
  const { content } = props;
  return _$ssr(
    _tmpl$4,
    _$getHydrationKey(),
    _$escape(
      _$createComponent(
        Child,
        _$mergeProps(
          {
            name: "John"
          },
          props,
          {
            booleanProperty: true,

            get children() {
              return _$ssr(_tmpl$3, _$getHydrationKey());
            }
          }
        )
      )
    ),
    _$escape(
      _$createComponent(Child, {
        name: "Jason",

        get children() {
          return _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(content));
        }
      })
    ),
    _$escape(
      _$createComponent(Context.Consumer, {
        children: context => context
      })
    )
  );
};

const template2 = _$createComponent(Child, {
  name: "Jake",

  get dynamic() {
    return state.data;
  },

  stale: state.data,
  handleClick: clickHandler,

  get ["hyphen-ated"]() {
    return state.data;
  }
});

const template3 = _$createComponent(Child, {
  get children() {
    return [
      _$ssr(_tmpl$5, _$getHydrationKey()),
      _$ssr(_tmpl$5, _$getHydrationKey()),
      _$ssr(_tmpl$5, _$getHydrationKey()),
      "After"
    ];
  }
});

const template4 = _$createComponent(Child, {
  get children() {
    return _$ssr(_tmpl$5, _$getHydrationKey());
  }
});

const template5 = _$createComponent(Child, {
  get dynamic() {
    return state.dynamic;
  },

  get children() {
    return state.dynamic;
  }
}); // builtIns

const template6 = _$createComponent(_$For, {
  get each() {
    return state.list;
  },

  get fallback() {
    return _$createComponent(Loading, {});
  },

  children: item =>
    _$createComponent(Show, {
      get when() {
        return state.condition;
      },

      children: item
    })
});

const template7 = _$createComponent(Child, {
  get children() {
    return [_$ssr(_tmpl$5, _$getHydrationKey()), () => state.dynamic];
  }
});

const template8 = _$createComponent(Child, {
  get children() {
    return [item => item, item => item];
  }
});

const template9 = _$createComponent(_garbage, {
  children: "Hi"
});

const template10 = _$ssr(
  _tmpl$6,
  _$getHydrationKey(),
  _$escape(
    _$createComponent(Link, {
      children: "new"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "comments"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "show"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "ask"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "jobs"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "submit"
    })
  )
);

const template11 = _$ssr(
  _tmpl$7,
  _$getHydrationKey(),
  _$escape(
    _$createComponent(Link, {
      children: "new"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "comments"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "show"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "ask"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "jobs"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "submit"
    })
  )
);

const template12 = _$ssr(
  _tmpl$8,
  _$getHydrationKey(),
  _$escape(
    _$createComponent(Link, {
      children: "comments"
    })
  ),
  _$escape(
    _$createComponent(Link, {
      children: "show"
    })
  )
);

class Template13 {
  render() {
    const _self$ = this;

    _$createComponent(Component, {
      get prop() {
        return _self$.something;
      },

      get children() {
        return _$createComponent(Nested, {
          get prop() {
            return _self$.data;
          },

          get children() {
            return _self$.content;
          }
        });
      }
    });
  }
}

const Template14 = _$createComponent(Component, {
  get children() {
    return data();
  }
});
