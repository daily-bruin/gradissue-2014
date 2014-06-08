#!/bin/bash
for file in *.html;
do
  new=`echo ${file} | sed s/html/md/g`
  mv ${file} $new
done
exit 0
