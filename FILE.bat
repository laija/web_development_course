@echo off
color 0a
:Input
title @%CD%
echo.
set/p "command= +++> "
%command%
goto Input
