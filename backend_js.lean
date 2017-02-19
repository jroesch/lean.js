import tools.native
import tools.native.ir
import system.io

import .format_js
import tools.debugger

set_option debugger true
set_option debugger.autorun true

meta def js_compiler : native.ir.context → io unit :=
    fun ctxt, write_file "out.js" (format_js.program (ctxt^.to_items))

@[backend] meta def js_backend : ir.backend :=
    ⟨ js_compiler ⟩

def main : io unit := put_str "T"
