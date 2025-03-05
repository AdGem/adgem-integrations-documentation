"use strict";(self.webpackChunkadgem_integrations_documentation=self.webpackChunkadgem_integrations_documentation||[]).push([[4813],{11926:(e,t,n)=>{n.d(t,{Y4:()=>u,ZD:()=>l,np:()=>c,uz:()=>d,wI:()=>o});n(96540);var a=n(50539),s=n(81430),i=n(74848);function r(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=r();return(0,a.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=r();return(0,a.translate)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const d=()=>(0,a.translate)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,i.jsx)(a.default,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,i.jsx)(a.default,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},14005:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(83750),s=n(18189),i=n(74848);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},17448:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(50539),s=n(11865),i=n(74848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},26956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(96540);var a=n(34164),s=n(50539),i=n(68207),r=n(204),l=n(11926),o=n(56289),d=n(60569),c=n(17448),u=n(37220),h=n(14005),g=n(40665),p=n(9303),m=n(74848);function f(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.be,{title:n,description:t.description}),(0,m.jsx)(u.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,m.jsxs)(d.A,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(g.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.default,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.default,{href:t.allTagsPath,children:(0,m.jsx)(s.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(h.A,{items:n}),(0,m.jsx)(c.A,{metadata:i})]})}function x(e){return(0,m.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,m.jsx)(f,{...e}),(0,m.jsx)(b,{...e})]})}},27289:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>c,Uh:()=>l,Yh:()=>d});n(96540);var a=n(50539),s=n(27143),i=n(74848);function r(){return(0,i.jsx)(a.default,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.default,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,i.jsx)(a.default,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function c(){return(0,i.jsx)(a.default,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},40665:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var a=n(34164),s=n(27289),i=n(204),r=n(79709),l=n(74848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function d(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}}}]);