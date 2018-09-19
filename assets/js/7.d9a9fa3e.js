(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"jwt-token-认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-token-认证","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT Token 认证")]),t._v(" "),a("h2",{attrs:{id:"实现步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("Startup")]),t._v(" 的 "),a("code",[t._v("ConfirureServices")]),t._v(" 中进行配置,启用 "),a("code",[t._v("jwt")]),t._v(" 中间件")])]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("services"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("AddAuthentication")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      o"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultAuthenticateScheme "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" JwtBearerDefaults"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationScheme"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      o"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultChallengeScheme "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" JwtBearerDefaults"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationScheme"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("AddJwtBearer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      o"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenValidationParameters "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Microsoft"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IdentityModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tokens"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenValidationParameters")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          ValidIssuer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwtSetting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Issuer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          ValidAudience "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwtSetting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Audience"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          IssuerSigningKey "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SymmetricSecurityKey")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Encoding"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UTF8"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("GetBytes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jwtSetting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecretKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("ul",[a("li",[t._v("在 "),a("code",[t._v("Starup")]),t._v(" 的 "),a("code",[t._v("Configure")]),t._v(" 中 配置请求管道, 启用身份认证中间件")])]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("useAuthentication")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("给 Controller 添加 [Authorize] 标记")])]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("Route")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"api/[controller]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("ApiController")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("Authorize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ValuesController")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ControllerBase")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("添加 AuthController,并添加一个 action, 用来生成 JWT token")])]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token class-name"}},[t._v("HttpPost")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("IActionResult")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("LoginViewModel")]),t._v(" model"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserName "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"jesse"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" model"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Password "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"123123"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tokenHandler "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("JwtSecurityTokenHandler")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" claims "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("List")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Claim"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Claim")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ClaimTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"jesse"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Claim")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ClaimTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Role"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"user"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" signingCredentials "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SigningCredentials")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SymmetricSecurityKey")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Encoding"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UTF8"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("GetBytes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_jwtSetting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecretKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SecurityAlgorithms"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HmacSha256"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("JwtSecurityToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("issuer"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _jwtSetting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Issuer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audience"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _jwtSetting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Audience"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" claims"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" claims"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notBefore"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Now"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expires"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Now"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("AddMinutes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signingCredentials"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" signingCredentials"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tokenHandler"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Ok")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("BadRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("ul",[a("li",[t._v("使用 postman 的 POST 方式请求 "),a("code",[t._v("/api/auth")]),t._v(" 接口,拿到生成的 token, 然后将 token 放在 httpheader 中, 请求"),a("code",[t._v("/api/values")]),t._v(" 接口,如果 token 有效的话,会得到响应信息")])])])}],!1,null,null,null);e.options.__file="index.md";s.default=e.exports}}]);