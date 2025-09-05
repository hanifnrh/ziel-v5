"use client";
"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;

var use_toast_1 = require("@/components/hooks/use-toast");

var button_1 = require("@/components/ui/button");

var form_1 = require("@/components/ui/form");

var input_1 = require("@/components/ui/input");

var textarea_1 = require("@/components/ui/textarea");

var utils_1 = require("@/lib/utils");

var zod_1 = require("@hookform/resolvers/zod");

var lucide_react_1 = require("lucide-react");

var link_1 = require("next/link");

var react_1 = require("react");

var react_hook_form_1 = require("react-hook-form");

var z = require("zod");

var dot_pattern_1 = require("../../ui/dot-pattern");

var MAX_FILE_SIZE = 5000000;
var ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]; // form data validation using zod

var profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }).max(30, {
    message: "Name must not be longer than 30 characters."
  }),
  email: z.string({
    required_error: "Please select an email to display."
  }).email(),
  message: z.string().max(160).min(4),
  urls: z.array(z.object({
    value: z.string().url({
      message: "Please enter a valid URL."
    })
  })).optional()
}); // This can come from your database or API. Default values for the form fields.

var defaultValues = {
  name: "",
  email: "",
  message: ""
}; // handle file upload
// ---------------------------------------------------------

var ContactForm = function ContactForm() {
  // Function for when to check if the form is valid
  var form = react_hook_form_1.useForm({
    resolver: zod_1.zodResolver(profileFormSchema),
    defaultValues: defaultValues,
    mode: "onChange"
  }); // testing use state

  var _a = react_1.useState(false),
      loading = _a[0],
      setLoading = _a[1]; // function to submit the form


  var submitForm = function submitForm(data) {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, responseData, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            use_toast_1.toast({
              title: "Hold on!"
            });
            setLoading(true);
            _a.label = 1;

          case 1:
            _a.trys.push([1, 4,, 5]);

            return [4
            /*yield*/
            , fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            })];

          case 2:
            response = _a.sent();

            if (!response.ok) {
              throw new Error("Error sending email");
            }

            return [4
            /*yield*/
            , response.json()];

          case 3:
            responseData = _a.sent(); // Handle response data as needed
            // Add toast here

            use_toast_1.toast({
              variant: "default",
              title: "Message sent!",
              description: "We'll get back to you soon."
            }); // set loading to false

            setLoading(false);
            return [3
            /*break*/
            , 5];

          case 4:
            error_1 = _a.sent();
            use_toast_1.toast({
              variant: "destructive",
              title: "Message not sent!",
              description: "We'll fix the problem ASAP."
            });
            return [3
            /*break*/
            , 5];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  function setFile(arg0) {
    throw new Error("Function not implemented.");
  }

  return React.createElement("div", {
    id: "contact"
  }, React.createElement(form_1.Form, __assign({}, form), React.createElement("div", {
    className: "p-8 pb-20 px-8 md:px-20 xl:px-28 w-full"
  }, React.createElement("div", {
    className: "grid grid-cols-1 gap-3 max-w-7xl mx-auto"
  }, React.createElement("div", {
    className: utils_1.cn("group relative p-8 rounded-xl overflow-hidden transition-all duration-300", "border border-white/10 bg-black/10", "hover:-translate-y-0.5 will-change-transform", "col-span-1", "md:col-span-2")
  }, React.createElement(dot_pattern_1.DotPattern, {
    className: utils_1.cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-60")
  }), React.createElement("div", {
    className: "relative flex flex-col space-y-3"
  }, React.createElement("div", {
    className: "space-y-2"
  }, React.createElement("div", {
    className: "body flex justify-start items-center gap-4 text-neutral-100 tracking-tight text-2xl"
  }, React.createElement("div", {
    className: "w-8 h-8 rounded-lg flex items-center justify-center bg-purple-600/20 text-purple-600 group-hover:bg-gradient-to-br transition-all duration-300"
  }, React.createElement(lucide_react_1.PencilLine, null)), React.createElement("h3", null, "Contact Me")), React.createElement("p", {
    className: "body-light text-md text-neutral-300 leading-snug"
  }, "Contact me here, this form will automatically send your messages to my email or directly message me to", React.createElement(link_1["default"], {
    href: "mailto:dailyziel@gmail.com",
    rel: "canonical",
    target: "_blank",
    className: "text-purple-600 underline ml-2"
  }, "dailyziel@gmail.com")))), React.createElement("div", {
    className: "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent  to-transparent via-purple-700/10 opacity-100 transition-opacity duration-300"
  }), React.createElement("form", {
    onSubmit: form.handleSubmit(submitForm),
    className: "space-y-5 pt-6 text-xs sm:text-base text-neutral-500 body-light"
  }, React.createElement(form_1.FormField, {
    control: form.control,
    name: "name",
    render: function render(_a) {
      var field = _a.field;
      return React.createElement(form_1.FormItem, null, React.createElement(form_1.FormLabel, {
        className: "text-neutral-200"
      }, "Name"), React.createElement(form_1.FormControl, null, React.createElement(input_1.Input, __assign({
        type: "text",
        placeholder: "Type your name here",
        autoComplete: "true",
        className: "bg-neutral-950/30"
      }, field))), React.createElement(form_1.FormMessage, null));
    }
  }), React.createElement(form_1.FormField, {
    control: form.control,
    name: "email",
    render: function render(_a) {
      var field = _a.field;
      return React.createElement(form_1.FormItem, null, React.createElement(form_1.FormLabel, {
        className: "text-neutral-200"
      }, "Email"), React.createElement(form_1.FormControl, null, React.createElement(input_1.Input, __assign({
        type: "email",
        placeholder: "Type your email here",
        autoComplete: "true",
        className: "bg-neutral-950/30"
      }, field))), React.createElement(form_1.FormMessage, null));
    }
  }), React.createElement(form_1.FormField, {
    control: form.control,
    name: "message",
    render: function render(_a) {
      var field = _a.field;
      return React.createElement(form_1.FormItem, null, React.createElement(form_1.FormLabel, {
        className: "text-neutral-200"
      }, "Message"), React.createElement(form_1.FormControl, null, React.createElement(textarea_1.Textarea, __assign({
        placeholder: "Type your message here",
        className: "resize-none bg-neutral-950/30"
      }, field, {
        autoComplete: "true"
      }))), React.createElement(form_1.FormMessage, null));
    }
  }), React.createElement("div", {
    className: "w-full h-full flex justify-center items-center"
  }, React.createElement(button_1.Button, {
    type: "submit",
    disabled: loading,
    className: "px-0 py-10"
  }, React.createElement("div", {
    style: {
      transform: "none"
    }
  }, React.createElement("div", {
    className: "group relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-2xl shadow-neutral-900"
  }, React.createElement("span", {
    className: "absolute inset-0 overflow-hidden rounded-xl"
  }, React.createElement("span", {
    className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
  }, " "), " "), React.createElement("div", {
    className: "body-light relative z-10 flex items-center space-x-2 rounded-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10"
  }, React.createElement("span", null, "Submit"), React.createElement(lucide_react_1.Send, null)), React.createElement("span", {
    className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"
  })))))))))));
};

exports["default"] = ContactForm;