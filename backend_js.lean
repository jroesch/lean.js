import tools.native
import tools.native.ir
import system.io

import .format_js

meta def js_compiler : native.ir.context → io unit :=
    fun ctxt, put_str_ln $ format_js.program (ctxt^.to_items)

@[backend] meta def js_backend : ir.backend :=
    ⟨ js_compiler ⟩

-- set_option trace.compiler true


def main : io unit := put_str "This is the main fn!"
