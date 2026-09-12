---
layout: default
title: Notes
permalink: /notes/
---

<header class="page-header">
  <p class="eyebrow">Today I learned</p>
  <h1>Notes</h1>
  <p>把每天遇到的小問題，整理成日後找得到的答案。</p>
</header>

<section class="notes-grid">
  {% assign sorted_notes = site.notes | sort: 'date' | reverse %}
  {% for note in sorted_notes %}
    <article class="note-card">
      <p class="entry-kicker">{{ note.date | date: "%Y.%m.%d" }}{% if note.topic %} · {{ note.topic }}{% endif %}</p>
      <h2><a href="{{ note.url | relative_url }}">{{ note.title }}</a></h2>
      <p>{{ note.summary | default: note.excerpt | strip_html | truncate: 90 }}</p>
    </article>
  {% else %}
    <p class="empty-copy">新的學習筆記會出現在這裡。</p>
  {% endfor %}
</section>

