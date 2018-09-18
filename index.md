---
layout: default
title: Wax.
banner:
- collection: grants
  pid: obj6
  y: center
  x: left
  zoom: 1
- collection: grants
  pid: obj3
  zoom: 1
  x: right
- collection: grants
  pid: obj2
  zoom: 1
  y: center
  x: left
- collection: grants
  pid: obj1
  zoom: 1
---

{% include banner.html caption=true %}

__Wax__ is a [minimal computing](http://go-dh.github.io/mincomp/) project for producing digital exhibitions focused on impact, durability, ease, and flexibility. Our underlying technology is made to learn and to teach, and can produce beautifully rendered, high-quality image collections and scholarly exhibits. To start using Wax, please see our [documentation](https://minicomp.github.io/wiki/#/wax/) for installation instructions and more.

### Browse the Collection
<br>

{% include gallery.html facet_by='grant_year_type' collection='grants' %}

<br><br>

### Search the Collection

{% include search.html %}
