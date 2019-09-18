#!/bin/bash
read input
proto="$(echo $input | grep :// | sed -e's,^\(.*://\).*,\1,g')"
url="$(echo ${input/$proto/})"
hostport="$(echo ${url/$user@/} | cut -d/ -f1)"
host="$(echo $hostport | cut -d. -f1)"
path="$(echo $url | cut -d. -f2-)"
domain="$(echo "$url" | sed -e 's|^/[^/]*//||' -e 's|/.*$||')"
echo "url: $url"
echo "   Protocol: $proto"
echo "   Host: $host"
echo "   path: $path"
echo "   domain: $domain"