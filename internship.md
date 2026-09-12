---
layout: default
title: Internship Log
permalink: /internship/
---

<header class="page-header">
  <p class="eyebrow">Clinical rotations</p>
  <h1>Internship Log</h1>
  <p>按照日期整理的臨床實習紀錄。從每一次不確定，到慢慢多懂一點。</p>
</header>

<section class="archive-list">
  {% for post in site.posts %}
    {% assign current_year = post.date | date: "%Y" %}
    {% if current_year != previous_year %}
      <h2>{{ current_year }}</h2>
      {% assign previous_year = current_year %}
    {% endif %}
    <article>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m.%d" }}</time>
      <div>
        <p>{{ post.department | default: "Internship" }}{% if post.day %} · Day {{ post.day }}{% endif %}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      </div>
    </article>
  {% endfor %}
</section>

