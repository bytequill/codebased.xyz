+++
date = '{{ .Date.Format "2006-02-01" }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
description = "{{ .Site.Params.Description }}"
+++
