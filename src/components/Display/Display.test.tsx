import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Display } from "./Display";

describe('Display', ()=>{
    it('shows the value', ()=>{
        render(<Display value="123"/>)
        expect(screen.getByText('123')).toBeInTheDocument()
    })

    it('shows 0 when value is empty', ()=>{
        render(<Display value=""/>)
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})